/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity()
export class SalesEntity {

    @PrimaryGeneratedColumn()
    id?: string;

    @Column()
    name?: string;

    @Column()
    amount?: number;

    @Column()
    received?: number

    @Column({ type: Number, default: 0 })
    balance?: number;

    @Column()
    status?: string;

    @Column({ type: String, default: `` })
    description?: string;

    @CreateDateColumn({ type: String, default: `${new Date()}` })
    'created at'?: string;

    @UpdateDateColumn({ type: String, default: `${new Date()}` })
    'updated at'?: string;

    @ManyToMany(() => ProductEntity, items => items.sales)
    @JoinTable()
    items!: ProductEntity
}