import { Injectable } from '@nestjs/common'

export class UserEntity {
  id: number
  username: string
  password: string
}

@Injectable()
export class UserRepository {
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
