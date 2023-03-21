import { Entity, Column, PrimaryGeneratedColumn,  OneToOne, JoinColumn, } from 'typeorm';
import { TenantEntity } from './tenant';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  // @OneToOne(() => TenantEntity)
  // @JoinColumn()
  // tenant: TenantEntity
}