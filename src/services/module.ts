import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/module'
import { UserService } from './user.service'
import { ValidatorModule } from 'src/validations/module'

@Module({
  imports: [DatabaseModule, ValidatorModule],
  providers: [UserService],
  exports: [UserService],
})
export class ServiceModule {}
