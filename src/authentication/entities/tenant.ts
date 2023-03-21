import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TenantEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;
}