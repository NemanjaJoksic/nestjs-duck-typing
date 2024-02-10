import { IsNotEmpty, MinLength, Validate } from 'class-validator'
import { UserNotExistRule } from './app.validation'

export class UserEntity {
  id: number
  username: string
  password: string
}

export class User {
  id: number
  username: string
}

export class CreateUserDto {
  @IsNotEmpty()
  @Validate(UserNotExistRule)
  username: string

  @IsNotEmpty()
  @MinLength(6)
  password: string
}
