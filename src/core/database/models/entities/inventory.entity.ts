import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity()
export class InventoryEntity {

    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    name!: string;

    @Column()
    'estimated budget'!: number;

    @Column()
    'actual budget'!: number;

    // @OneToMany(()=>ProductEntity,product=>product.inventory)
    // products!: ProductEntity[]


    @Column({ type: String, default: "Admin" })
    user!: string;

    @Column({ type: String, default: "" })
    description!: string;

    @Column()
    status!: string;

    @CreateDateColumn({ type: String, default: `${new Date()}` })
    'created at'!: string;

    @UpdateDateColumn({ type: String, default: `${new Date()}` })
    'updated at'!: string;
}