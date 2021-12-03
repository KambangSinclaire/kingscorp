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
export class InvoiceEntity {

    @PrimaryGeneratedColumn()
    id?: string;

    @Column()
    'total amount'?: number;

    @Column()
    'expected Date'?: string;

    @Column()
    'expiry Date'?: string;

    @Column()
    client?: string;

    @Column({type:String,default:""})
    description?: string;

    @Column()
    items?: string;

    @Column({type:String,default:"Admin"})
    user?:string

    @CreateDateColumn({type:String,default:`${new Date()}`})
    'created at'?: string;

    @UpdateDateColumn({type:String,default:`${new Date()}`})
   'updated at'?: string;
}