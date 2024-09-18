import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { JOB_MODEL, JobDocument} from "src/schemas/job";
import { Model } from "mongoose";



@Injectable()
export class JobsService {
    constructor(@InjectModel(JOB_MODEL) private readonly jobModel: Model<JobDocument>){
        console.log("this.jobModel",this.jobModel);
    }
    
}