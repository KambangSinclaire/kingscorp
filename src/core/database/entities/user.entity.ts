import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    id?:string

    @Column()
    signInType?: string;

    @Column()
    lastLogin?: Date;

    @Column()
    lastLoginIp?: string;

    @Column()
    lastLoginLocation?: string;

    @Column()
    username?: string;

    @Column()
    firstName?: string;

    @Column()
    lastName?: string;

    @Column()
    about?: string;

    // @Column()
    // createdAt?: string;

    // @Column()
    // updateAt?: string;

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

}