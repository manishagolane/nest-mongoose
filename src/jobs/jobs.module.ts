import { Module } from "@nestjs/common";
import { JobsService } from "./jobs.service";
// import { MongooseModule } from "@nestjs/mongoose";
// import { JobSchema, JOB_MODEL } from "../schemas/job";

@Module({
    //if we don't make the MongooseModelsModule global then we need to import it
    // imports: [MongooseModule.forFeature([{ name: JOB_MODEL, schema: JobSchema }])],
    imports: [],
    providers: [JobsService],
    exports: []

    // exports: [MongooseModule]

})
export class JobsModule {};