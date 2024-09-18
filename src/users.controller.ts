// import { Controller, Get, Req, Post, Put, Delete, Patch, HttpCode, HttpStatus, Res, Header, Redirect } from "@nestjs/common";
// import { rejects } from "assert";
// import { resolve } from "path";
// import { of } from 'rxjs';
// import {Request, Response} from 'express';

// @Controller('/users')
// export class UsersController{

//     // @Get('/profile')
//     // getProfile() {
//     //     // return new Promise((resolve, reject) =>{
//     //     //     resolve({
//     //     //         hello: "World"
//     //     //     })
//     //     // })
//     //     // return {
//     //     //     hello: 'Hello Manisha!!!!!!'
//     //     // };
//     //     return of({
//     //         hello: "world",
//     //     })
//     // }

//     @Get('/profile')
//     @Redirect('/users/account')
//     // @HttpCode(200)
//     // @HttpCode(HttpStatus.NO_CONTENT)
//     // @Header('Cache-Control','none')
//     // @Header('X-Name ', 'Manisha')
//     getProfile(@Req() req: Request, @Res({ passthrough: true}) res: Response){
//         console.log(req);
//         // res.status(200);
//         // res.json({
//         //     greed: "Namste!!!"
//         // })
//         return {
//             greed: "Namste!!!"
//         };
//     }

//     @Get('/account')
//     redirectRout(){
//         return "Working account";
//     }
// }