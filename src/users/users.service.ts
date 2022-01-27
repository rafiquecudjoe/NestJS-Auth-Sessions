import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
}



@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: "Rafique",
            username: "User1",
            password: "Flipmone1",
        }
        ,
        {
            id: 2,
            name: "Rafique1",
            username: "user2",
            password: "Flipmone2",
        },
        {
            id: 3,
            name: "Rafique2",
            username: "User3",
            password: "Flipmone3",
        }
    ]


    async findUser(username: string): Promise<User | undefined> {


       
        return this.users.find(user => username === username)
       
   }









}
