import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class NotificationEntity {

    @PrimaryGeneratedColumn()
    id?: string;

    @Column()
    type?: string;

    @Column()
    sender?: string;

    @Column()
    reciepient?: string;

    @Column()
    message?: string

    @Column({type:String,default:""})
    description?: string;

    @CreateDateColumn({type:String,default:`${new Date()}`})
    'created at'?: string;

    @UpdateDateColumn({type:String,default:`${new Date()}`})
   'updated at'?: string;
}