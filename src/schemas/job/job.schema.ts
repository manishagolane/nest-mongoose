import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Address } from "../common/address.schema";
import {JOB_TYPE} from "../../constants";
import {Types} from "mongoose";
import {User, USER_MODEL} from "../user/user.schema";
import { Document } from "mongoose";


@Schema({
    timestamps: true,
})
export class Job{

    @Prop({ type: Types.ObjectId, ref: USER_MODEL , required: true})
    employer: Types.ObjectId | User;

    @Prop({required: true})
    companyName: string;

    @Prop({required: true})
    title: string;

    @Prop({required: true})
    description: string;

    @Prop({required: true})
    expreience: number;

    @Prop({ defualt: []})
    tages?: string[];

    @Prop()
    salary?: String;

    @Prop({
        type: String,
        enum: Object.keys(JOB_TYPE),
        required: true,
    })
    type: JOB_TYPE;

    @Prop({type: Address, required: true})
    location: Address

}

export type JobDocument = Job & Document;

const schema = SchemaFactory.createForClass(Job);

export const JOB_MODEL = Job.name;

export const JobSchema = schema; 
