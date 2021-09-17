import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 100 })
  fullName: string;
  @Column({ type: 'varchar', unique: true })
  email: string;
  @Column({ type: 'varchar', length: 255 })
  password: string;
  @Column({ type: 'varchar', length: 50 })
  position: string;
  @Column({ type: 'varchar', length: 20 })
  phoneNumber: string;
  @Column({ type: 'varchar', length: 60 })
  address: string;
  @Column({ type: 'datetime' })
  createAt: string;
  @Column({ type: 'datetime' })
  updateAt: string;
  @Column({ type: 'boolean' })
  status: boolean;
}
