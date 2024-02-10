import { Module } from '@nestjs/common'
import { AppRepository } from './repository';

@Module({
  providers: [AppRepository],
  exports: [AppRepository],
})
export class DatabaseModule {}
