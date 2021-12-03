/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ClientEntity } from "./client.entity";
import { ProductEntity } from "./product.entity";

@Entity()
export class CreditEntity {

    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    amount!: number;

    @Column()
    'expiry Date'!: string;

    @OneToMany(() => ClientEntity, client => client.credits)
    @JoinColumn()
    client!: ClientEntity

    @ManyToMany(() => ProductEntity, product => product.credits)
    @JoinTable()
    products!: ProductEntity

    @Column({ type: String, default: "" })
    description!: string;

    @Column()
    items!: string;

    @Column({ type: String, default: "Admin" })
    user!: string

    @CreateDateColumn({ type: String, default: `${new Date()}` })
    'created at'!: string;

    @UpdateDateColumn({ type: String, default: `${new Date()}` })
    'updated at'!: string;
}