import { IsNotEmpty, MinLength, Validate } from 'class-validator'
import { UserNotExist } from './validator/validation'

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
  @Validate(UserNotExist)
  username: string

  @IsNotEmpty()
  @MinLength(6)
  password: string
}
