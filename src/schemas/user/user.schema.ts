import { Schema, Prop, raw, SchemaFactory } from "@nestjs/mongoose";
import { ACCOUNT_STATUS, ACCOUNT_TYPE } from "../../constants";
import { Address, AddressSchema } from "../common/address.schema";
import { Document } from "mongoose";

@Schema({
    timestamps: true,
    collection: "users"
})
export class User {
   
    @Prop({ required: true})
    name: string;

    @Prop({ required: true, select: false })
    password: string;

    @Prop({ required: true})
    email: string;

    @Prop()
    age?: number;

    @Prop()
    phone?: number;

    @Prop({
        type: String,
        enum: Object.keys(ACCOUNT_STATUS),
        default: ACCOUNT_STATUS.ACTIVE
    })
    status?: ACCOUNT_STATUS;

    @Prop({
        type: String,
        enum: Object.keys(ACCOUNT_TYPE),
        immutable: true,
        required: true
    })
    accountType: ACCOUNT_TYPE;

    @Prop({ default: []})
    social?: string[];

    @Prop({ required: false })
    isEmailVerified?: boolean;

    @Prop({ type: AddressSchema, required: true })
    address: Address;

    @Prop(raw({
        reference: {type: String},
        beta: {type: Boolean}
    }))
    metadata: Record<string, any> | any;

}

export type UserDocument = User & Document;
const schema = SchemaFactory.createForClass(User);

export const USER_MODEL = User.name;

export const UserSchema = schema;

