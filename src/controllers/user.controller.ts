import { Body, Controller, Get, Post } from '@nestjs/common'
import { User, CreateUserDto } from 'src/model/user.model';
import { UserService } from 'src/services/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/api/users')
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers()
  }

  @Post('/api/users')
  async createUser(
    @Body() body: { username: string; password: string },
  ): Promise<User> {
    const createUserDto = new CreateUserDto()
    createUserDto.username = body.username
    createUserDto.password = body.password

    const user = await this.userService.createUser(createUserDto)

    return user as unknown as User
  }
}
