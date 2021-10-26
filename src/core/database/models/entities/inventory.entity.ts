import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class InventoryEntity {

    @PrimaryGeneratedColumn()
    id?: string;

    @Column()
    name?: string;

    @Column()
    'estimated budget'?: number;

    @Column()
    'actual budget'?: number;

    @Column()
    products?: string

    @Column({type:String,default:"Admin"})
    user?: string;

    @Column({type:String,default:""})
    description?: string;

    @Column()
    status?: string;

    @CreateDateColumn({type:String,default:`${new Date()}`})
    'created at'?: string;

    @UpdateDateColumn({type:String,default:`${new Date()}`})
   'updated at'?: string;
}