import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI)],
  controllers: [],
  providers: [],
})
export class AppModule {}
