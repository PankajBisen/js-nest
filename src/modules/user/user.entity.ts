import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { ApiProperty } from "@nestjs/swagger";
import { UserRole } from "./enum/user.enum";

@Entity({ name: 'users' })
export class User extends BaseEntity {

    @ApiProperty({ description: 'Primary key as user id', example: 1 })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({description:'User name',example:'Pankaj Bisen'})
    @Column()
    name: string;

    @ApiProperty({description:'User email address',example:'pankajpkj7888@gmail.com'})
    @Column({unique: true})
    email: string;

    @ApiProperty({description:'Hashed user password'})
    @Column()
    password: string;

    @Column({type: 'enum', enum: UserRole, default: UserRole.MEMBER})
    role: UserRole;

    @ApiProperty({description:'When user was created'})
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty({description:'When user was updated'})
    @UpdateDateColumn()
    updatedAt: Date;

    @BeforeInsert()
    async setPassword(password: string) {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(password || this.password, salt);
    }

}