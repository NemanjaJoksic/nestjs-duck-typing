import { Injectable } from '@nestjs/common'
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  validate,
} from 'class-validator'
import { AppRepository } from './app.service'
import { ModuleRef } from '@nestjs/core'

@Injectable()
@ValidatorConstraint({ name: 'UserNotExist', async: true })
export class UserNotExistRule implements ValidatorConstraintInterface {
  constructor(private readonly appRepository: AppRepository) {}
  // constructor(private moduleRef: ModuleRef) {
  //   console.log('+++++')
  // }

  async validate(username: string): Promise<boolean> {
    // const ar = this.moduleRef.get(AppRepository)
    const ar = this.appRepository
    console.log('appRepository=' + ar)

    const exists = await ar.exists(username)
    return !exists
  }

  defaultMessage(args: ValidationArguments) {
    return 'User already exists'
  }
}

export class AppValidator {
  async validate(object: any) {
    const errors = await validate(object)
    if (errors.length > 0) {
      console.log(errors)
    }
  }
}
