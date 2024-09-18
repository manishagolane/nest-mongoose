import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseConfigService } from './mongoose-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,  // This makes ConfigModule available globally in the app
    }),
   
    MongooseModule.forRootAsync({
      // imports: [ConfigModule],
      useClass: MongooseConfigService,
    })
  ],
})
export class DatabaseModule {}


// import { MongooseModule } from '@nestjs/mongoose';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { MongooseConfigService } from './infra/mongoose/mongoose-config.service';
// ways to setup configuration & connection
    // // // Import ConfigModule to read environment variables from .env
    // ConfigModule.forRoot({
    //   isGlobal: true,  // This makes ConfigModule available globally in the app
    // }),
    // // // MongooseModule forRootAsync to load the MongoDB URI asynchronously using ConfigService
    // // MongooseModule.forRootAsync({
    // //   imports: [ConfigModule],
    // //   useFactory: async (configService: ConfigService) => ({
    // //     uri: configService.get<string>('MONGODB_URI'),  // Fetching the connection string from the env file
    // //   }),
    // //   inject: [ConfigService],
    // // }),
    // MongooseModule.forRootAsync({
    //   // imports: [ConfigModule],
    //   useClass: MongooseConfigService,
    // })