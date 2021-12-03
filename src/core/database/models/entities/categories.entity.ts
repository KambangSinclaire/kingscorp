/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ClientEntity } from "./client.entity";
import { ProductEntity } from "./product.entity";

@Entity()
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: String, nullable: false })
    name!: string;

    @Column({ type: String, nullable: false, })
    type!: string;

    @Column({ type: Number, default: 0, nullable: true })
    discount!: number;

    @Column({ type: Number, default: 0, nullable: true })
    threshhold!: number;


    @Column({ type: String, default: '', nullable: true })
    description!: String;

    @OneToOne(() => ClientEntity, client => client.category)
    client!: ClientEntity


    @OneToMany(() => ProductEntity, products => products.category)
    products!: ProductEntity

}