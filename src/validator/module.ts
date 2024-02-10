import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/module'
import { AppValidator, UserNotExist } from './validation'

@Module({
  imports: [DatabaseModule],
  providers: [AppValidator, UserNotExist],
  exports: [AppValidator, UserNotExist],
})
export class ValidatorModule {}
