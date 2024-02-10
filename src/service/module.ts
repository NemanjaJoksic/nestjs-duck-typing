import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/module'
import { ValidatorModule } from 'src/validator/module'
import { AppService } from './service'

@Module({
  imports: [DatabaseModule, ValidatorModule],
  providers: [AppService],
  exports: [AppService],
})
export class ServiceModule {}
