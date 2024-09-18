import { Module } from "@nestjs/common";
import {UsersService} from "./users.service";
// import { MongooseModule } from "@nestjs/mongoose";
// import { USER_MODEL, UserSchema } from "src/schemas/user";

@Module({
    //if we don't make the MongooseModelsModule global then we need to import it
    // imports: [MongooseModule.forFeature([{ name: USER_MODEL, schema: UserSchema}])],
    imports: [],
    providers: [UsersService],
    exports: [],

    // exports: [MongooseModule]
})
export class UserModule {}