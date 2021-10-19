import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CreditEntity {

    @PrimaryGeneratedColumn()
    id?: string;

    @Column()
    name?: string;

    @Column()
    quantity?: number;

    @Column()
    'unit cost'?: number;

    @Column()
    created!: Date

    @Column()
    'image url'?: string;

    @Column()
    description?: string;
}