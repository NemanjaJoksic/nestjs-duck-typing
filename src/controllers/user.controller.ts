import { Body, Controller, Get, Post } from '@nestjs/common'
import { User, CreateUserDto } from 'src/model/user.model';
import { UserService } from 'src/services/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/api/users')
  getUsers(): Promise<User[]> {
    return this.userService.getUsers()
  }

  @Post('/api/users')
  createUser(
    @Body() body: { username: string; password: string },
  ): Promise<User> {
    const createUserDto = new CreateUserDto()
    createUserDto.username = body.username
    createUserDto.password = body.password

    return this.userService.createUser(createUserDto)
  }
}
