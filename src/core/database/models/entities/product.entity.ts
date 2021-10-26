import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ProductEntity {

    @PrimaryGeneratedColumn()
    id?: string;

    @Column()
    name?: string;

    @Column()
    category?: string;

    @Column()
    quantity?: number;

    @Column({type:String,default:`latest`})
    stock?: string;

    @Column({type:String,default:`Admin`})
    user?: string;

    @Column({type:String,default:`new`})
    inventory?: string;
    
    @Column()
    'unit cost'?: number;

    @Column()
    'image url'?: string;
    
    @Column({type:String,default:``})
    description?: string;

    @CreateDateColumn({type:String,default:`${new Date()}`})
    'created at'?: string;

    @UpdateDateColumn({type:String,default:`${new Date()}`})
   'updated at'?: string;
}