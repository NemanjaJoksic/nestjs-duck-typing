import { IsNotEmpty, MinLength, Validate } from 'class-validator'
import { UserNotExist } from 'src/validations/user.validation'

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
