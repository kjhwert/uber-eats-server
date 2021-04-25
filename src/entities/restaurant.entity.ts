import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

@ObjectType()
@Entity()
export class Restaurant {
  @Field(type => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(type => String)
  @Column()
  @IsString()
  @Length(2, 20)
  name: string;

  @Field(type => Boolean)
  @Column({ default: () => false })
  @IsBoolean()
  isVegan: boolean;

  @Field(type => String)
  @Column({ nullable: true })
  @IsOptional()
  address: string;

  @Field(type => String)
  @Column()
  @Length(2, 10)
  ownersName: string;
}
