import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/module'
import { UserNotExist } from './user.validation'
import { AppValidator } from './validator'

@Module({
  imports: [DatabaseModule],
  providers: [AppValidator, UserNotExist],
  exports: [AppValidator, UserNotExist],
})
export class ValidatorModule {}
