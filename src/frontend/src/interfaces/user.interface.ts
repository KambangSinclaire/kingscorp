/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

export interface User{
    username:string;
    firstName?:string;
    lastName?:string;
    about?:string;
    createdAt?:string;
    updateAt?:string;
    createdBy:string;
    gender:string;
    role:string;
    status?:boolean;
}