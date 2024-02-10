import { Injectable } from '@nestjs/common'
import { User, CreateUserDto } from 'src/app.model'
import { AppRepository } from 'src/database/repository'
import { AppValidator } from 'src/validator/validation'

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
