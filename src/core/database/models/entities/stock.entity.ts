import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @Column()
    products?: string

    @Column()
    user?: string;

    @Column({type:String,default:``})
    description?: string;

    @CreateDateColumn({type:String,default:`${new Date()}`})
    'created at'?: string;

    @UpdateDateColumn({type:String,default:`${new Date()}`})
   'updated at'?: string;
}