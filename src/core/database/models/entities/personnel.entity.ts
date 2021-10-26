import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class PersonnelEntity {

    @PrimaryGeneratedColumn()
    id?: string;

    @Column()
    name?: string;

    @Column()
    firstname?: string;

    @Column()
    lastname?: string;

    @Column()
    role?: string;

    @Column({type:String,default:"Personnels"})
    group?: string;

    @Column()
    email?:string;

    @Column()
    password?: string;

    @Column({type:String,default:"personnel"})
    user?: string;

    @Column({type:String,default:`${new Date()}`})
    'last login time'?: string;

    @Column({type:String,default:"192.168.100.10"})
    'last login ip'?: string;

    @Column({type:String,default:"normal"})
    'login type'?: string;

    @Column()
    'profile image'?: string;

    @Column({type:String,default:""})
    description?: string;

    @CreateDateColumn({type:String,default:`${new Date()}`})
    'created at'?: string;

    @UpdateDateColumn({type:String,default:`${new Date()}`})
   'updated at'?: string;
}