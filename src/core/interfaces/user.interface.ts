/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

import { Personnel } from "./personnel.interface";
export interface User extends Personnel {
    password: string;
    signInType?:string;
    lastLogin:Date;
    lastLoginIp:string;
    lastLoginLocation:string;
}