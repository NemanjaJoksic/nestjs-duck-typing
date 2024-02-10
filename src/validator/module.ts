import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/module'
import { AppValidator, UserNotExistRule } from './validation'

@Module({
  imports: [DatabaseModule],
  providers: [AppValidator, UserNotExistRule],
  exports: [AppValidator, UserNotExistRule],
})
export class ValidatorModule {}
