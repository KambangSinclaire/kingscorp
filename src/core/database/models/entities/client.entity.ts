import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "../entities/product.entity";
import { CategoryEntity } from "./categories.entity";
import { CreditEntity } from "./credit.entity";
@Entity()
export class ClientEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: String, nullable: false })
    name!: string

    @Column({ type: String, nullable: false })
    phone!: string

    @Column({ type: String, nullable: true })
    email!: string

    @Column({ type: String, nullable: true })
    address!: string

    // @OneToMany(() => ProductEntity, products => products.client)
    // products!: ProductEntity

    @OneToMany(() => CreditEntity, credits => credits.client)
    credits!: CreditEntity

    @OneToOne(() => CategoryEntity, category => category.client)
    @JoinColumn()
    category!: CategoryEntity
}