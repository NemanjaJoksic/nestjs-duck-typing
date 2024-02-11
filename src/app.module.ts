import { Module } from '@nestjs/common'
import { ControllerModule } from './controllers/module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ControllerModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
