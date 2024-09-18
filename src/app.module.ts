import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './infra/mongoose/database.module';
import {JobsModule} from "./jobs/jobs.module";
import {UserModule} from "./users/users.module";
import { MongooseModelModule } from './schemas/mongoose-model.module';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}), 
    DatabaseModule, 
    JobsModule, 
    UserModule,
    MongooseModelModule
  ],
})
export class AppModule {}
