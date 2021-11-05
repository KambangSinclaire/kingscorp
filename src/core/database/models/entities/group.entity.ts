import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class GroupEntity {

    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    name!: string;

    @Column()
    roles!: string;

    @Column({type:String,default:"Admin"})
    user!: string;
    
    @Column({type:String,default:""})
    description!: string;

    @CreateDateColumn({type:String,default:`${new Date()}`})
    'created at'!: string;

    @UpdateDateColumn({type:String,default:`${new Date()}`})
   'updated at'!: string;
}