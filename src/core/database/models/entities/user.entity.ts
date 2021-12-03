/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    id?:string

    @Column()
    signInType?: string;

    @Column()
    'last login'?: Date;

    @Column()
    'last Login Ip'?: string;

    @Column()
    'last login location'?: string;

    @Column()
    username?: string;

    @Column()
    firstName?: string;

    @Column()
    lastName?: string;

    @Column()
    about?: string;

    @Column()
    createdBy?: string;

    @Column()
    gender?: string;

    @Column()
    role?: string;

    @Column()
    status?: boolean;

    @Column()
    password?:string;

    @CreateDateColumn({type:String,default:`${new Date()}`})
    'created at'?: string;

    @UpdateDateColumn({type:String,default:`${new Date()}`})
   'updated at'?: string;
}