import { Body, Controller, Post, Get, Put, Delete, Param } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController{
    constructor(private readonly userService: UsersService){}

    @Post()
    create(@Body() createUserData){
        return this.userService.create(createUserData);
    }

    @Get()
    getAll(){

    }

    @Get(":id")
    getOne(@Param("id") id: string){

    }

    @Put(":id")
    update(@Param("id") id: string, @Body() updateUserData){

    }

    @Delete(":id")
    remove(@Param("id") id: string){

    }
}