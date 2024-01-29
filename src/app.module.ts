import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
