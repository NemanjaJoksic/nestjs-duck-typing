import { Injectable } from '@nestjs/common'
import { CreateUserDto, User, UserEntity } from './app.model'
import { AppValidator } from './app.validation'

@Injectable()
export class AppRepository {
  async getUsers(): Promise<UserEntity[]> {
    const userEntity = new UserEntity()
    userEntity.id = 1
    userEntity.username = 'test_user'
    userEntity.password = 'test'

    return [userEntity]
  }

  async exists(username: string): Promise<boolean> {
    return true
  }
}

@Injectable()
export class AppService {
  constructor(
    private readonly validator: AppValidator,
    private readonly appRepository: AppRepository,
  ) {}

  async getUsers(): Promise<User[]> {
    return this.appRepository.getUsers()
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    await this.validator.validate(createUserDto)

    return { id: 123, username: createUserDto.username }
  }
}
