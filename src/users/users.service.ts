import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { USER_MODEL, UserDocument } from "src/schemas/user";
import { Model } from "mongoose";

@Injectable()
export class UsersService {
    constructor(@InjectModel(USER_MODEL) private readonly userModel: Model<UserDocument>) {
        console.log("this.userModel", this.userModel);
    }

    async create(createUserData){
        const user = this.userModel.create(createUserData);
 
        return user;
    }
}