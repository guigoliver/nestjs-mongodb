import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');
dotenv.config();
// const url = process.env.MONGO_URI;

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://profguilhermeas:justoserafim@scrum.hpte78n.mongodb.net/?retryWrites=true&w=majority',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
