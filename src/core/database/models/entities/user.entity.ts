import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    id?:string

    @Column()
    signInType?: string;

    @Column()
    'last login'?: Date;

    @Column()
    'last Login Ip'?: string;

    @Column()
    'last login location'?: string;

    @Column()
    username?: string;

    @Column()
    firstName?: string;

    @Column()
    lastName?: string;

    @Column()
    about?: string;

    @Column()
    createdBy?: string;

    @Column()
    gender?: string;

    @Column()
    role?: string;

    @Column()
    status?: boolean;

    @Column()
    password?:string;

    @CreateDateColumn({type:String,default:`${new Date()}`})
    'created at'?: string;

    @UpdateDateColumn({type:String,default:`${new Date()}`})
   'updated at'?: string;
}