import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppRepository, AppService } from './app.service'
import { AppValidator, UserNotExistRule } from './app.validation'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [UserNotExistRule, AppService, AppRepository, AppValidator],
  exports: [AppRepository]
})
export class AppModule {}
