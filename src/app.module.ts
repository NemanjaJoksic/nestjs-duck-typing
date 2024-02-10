import { Module } from '@nestjs/common'
import { DatabaseModule } from './database/module'
import { ValidatorModule } from './validator/module'
import { ServiceModule } from './service/module'
import { ControllerModule } from './controller/module'

@Module({
  imports: [DatabaseModule, ValidatorModule, ServiceModule, ControllerModule],
})
export class AppModule {}
