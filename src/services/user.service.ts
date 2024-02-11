import { Injectable } from '@nestjs/common'
import { UserRepository } from 'src/database/user.repository'
import { User, CreateUserDto } from 'src/model/user.model'
import { AppValidator } from 'src/validations/validator'

@Injectable()
export class UserService {
  constructor(
    private readonly validator: AppValidator,
    private readonly userRepository: UserRepository,
  ) {}

  async getUsers(): Promise<User[]> {
    const userEntities = await this.userRepository.getUsers()

    return userEntities.map((userEntity) => {
      return { id: userEntity.id, username: userEntity.username }
    })
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    await this.validator.validate(createUserDto)

    return { id: 123, username: createUserDto.username }
  }
}
