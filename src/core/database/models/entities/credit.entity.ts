import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class CreditEntity {

    @PrimaryGeneratedColumn()
    id?: string;

    @Column()
    amount?: number;

    @Column()
    'expiry Date'?: string;

    @Column()
    client?: string;

    @Column({type:String,default:""})
    description?: string;

    @Column()
    items?: string;

    @Column({type:String,default:"Admin"})
    user?:string

    @CreateDateColumn({type:String,default:`${new Date()}`})
    'created at'?: string;

    @UpdateDateColumn({type:String,default:`${new Date()}`})
   'updated at'?: string;
}