import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  validate,
} from 'class-validator'
import { AppRepository } from 'src/database/repository'

@Injectable()
@ValidatorConstraint({ name: 'UserNotExist', async: true })
export class UserNotExist implements ValidatorConstraintInterface {
  constructor(private readonly appRepository: AppRepository) {}

  async validate(username: string): Promise<boolean> {
    console.log('appRepository=' + this.appRepository)

    const exists = await this.appRepository.exists(username)
    return !exists
  }

  defaultMessage(args: ValidationArguments) {
    return 'user already exists'
  }
}

export class AppValidator {
  async validate(object: any) {
    const errors = await validate(object)
    if (errors.length > 0) {
      console.log(errors)

      const messages = []
      errors.forEach((error) => {
        Object.entries(error.constraints).forEach(([, message]) => {
          messages.push(message)
        })
      })

      console.log(messages)
      throw new HttpException(
        {
          message: 'Invalid request',
          status: HttpStatus.BAD_REQUEST,
          errors: messages,
        },
        HttpStatus.BAD_REQUEST,
      )
    }
  }
}
