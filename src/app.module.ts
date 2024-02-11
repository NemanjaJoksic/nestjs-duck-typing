import { Module } from '@nestjs/common'
import { ControllerModule } from './controllers/module'

@Module({
  imports: [ControllerModule],
})
export class AppModule {}
