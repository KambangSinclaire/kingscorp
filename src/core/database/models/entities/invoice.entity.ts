import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class InvoiceEntity {

    @PrimaryGeneratedColumn()
    id?: string;

    @Column()
    'total amount'?: number;

    @Column()
    'expected Date'?: string;

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