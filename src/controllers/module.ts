import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { ServiceModule } from 'src/services/module'

@Module({
  imports: [ServiceModule],
  controllers: [UserController],
})
export class ControllerModule {}
