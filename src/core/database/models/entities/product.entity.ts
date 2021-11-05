import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CreditEntity } from "./credit.entity";
import { CategoryEntity, } from "./categories.entity";
import { SalesEntity } from "./sales.entity";
import { InventoryEntity } from "./inventory.entity";
import { StockEntity } from "./stock.entity";

@Entity()
export class ProductEntity {

    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    name!: string;

    @Column()
    quantity!: number;

    @Column({ type: String, default: `Admin` })
    user!: string;

    @Column()
    'unit cost'!: number;

    @Column()
    'image url'!: string;

    @Column({ type: String, default: `` })
    description!: string;

    @CreateDateColumn({ type: String, default: `${new Date()}` })
    'created at'!: string;

    @UpdateDateColumn({ type: String, default: `${new Date()}` })
    'updated at'!: string;

    @ManyToMany(() => CreditEntity, credit => credit.products, { cascade: true })
    credits!: CreditEntity


    @ManyToOne(() => StockEntity)
    @JoinColumn({ name: "stock" })
    stock!: StockEntity;

    // @ManyToOne(() => InventoryEntity)
    // inventory!: InventoryEntity;

    // @OneToMany(() => ClientEntity, client => client.products)
    // @JoinColumn()
    // client!: ClientEntity

    @ManyToOne(() => CategoryEntity)
    @JoinColumn({ name: "category" })
    category!: CategoryEntity;

    @ManyToMany(() => SalesEntity, sales => sales.items)
    sales!: SalesEntity
}