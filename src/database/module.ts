import { Module } from '@nestjs/common'
import { UserRepository } from './user.repository'

@Module({
  providers: [UserRepository],
  exports: [UserRepository],
})
export class DatabaseModule {
  constructor() {
    console.log('Database configuration:')
    console.log('DATABASE_HOST=' + process.env.DATABASE_HOST)
    console.log('DATABASE_PORT=' + process.env.DATABASE_PORT)
    console.log('DATABASE_USERNAME=' + process.env.DATABASE_USERNAME)
    console.log('DATABASE_PASSWORD=' + process.env.DATABASE_PASSWORD)
  }
}
