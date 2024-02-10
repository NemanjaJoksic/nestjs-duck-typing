import { Body, Controller, Get, Post } from '@nestjs/common'
import { User, CreateUserDto } from 'src/app.model'
import { AppService } from 'src/service/service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/users')
  getUsers(): Promise<User[]> {
    return this.appService.getUsers()
  }

  @Post('/api/users')
  createUser(
    @Body() body: { username: string; password: string },
  ): Promise<User> {
    const createUserDto = new CreateUserDto()
    createUserDto.username = body.username
    createUserDto.password = body.password

    return this.appService.createUser(createUserDto)
  }
}
