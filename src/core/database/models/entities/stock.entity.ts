/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity()
export class StockEntity {

    @PrimaryGeneratedColumn()
    id?: string;

    @Column()
    name?: string;

    @Column()
    'estimated budget'?: number;

    @Column()
    'actual budget'?: number;

    @Column()
    'estimated profit'?: number;

    @Column({type:Number,default:0})
    'actual profit'?: number;

    @Column()
    status?: string;

    // @OneToMany(()=>ProductEntity,product=>product.stock)
    // products!: ProductEntity[]

    @Column()
    user?: string;

    @Column({type:String,default:``})
    description?: string;

    @CreateDateColumn({type:String,default:`${new Date()}`})
    'created at'?: string;

    @UpdateDateColumn({type:String,default:`${new Date()}`})
   'updated at'?: string;
}