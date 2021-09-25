import { Personnel } from "./personnel.interface";
export interface User extends Personnel {
    password: string;
    signInType?:string;
    lastLogin:Date;
    lastLoginIp:string;
    lastLoginLocation:string;
}