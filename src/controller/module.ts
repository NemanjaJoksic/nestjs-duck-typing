import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { ServiceModule } from 'src/service/module'

@Module({
  imports: [ServiceModule],
  controllers: [AppController],
})
export class ControllerModule {}
