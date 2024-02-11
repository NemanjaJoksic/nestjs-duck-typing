import { Module } from '@nestjs/common'
import { DatabaseModule } from './database/module'
import { ControllerModule } from './controllers/module'
import { ServiceModule } from './services/module'
import { ValidatorModule } from './validations/module'

@Module({
  imports: [DatabaseModule, ValidatorModule, ServiceModule, ControllerModule],
})
export class AppModule {}
