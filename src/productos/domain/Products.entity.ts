import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 255 })
  name: string;
  @Column({ type: 'text' })
  description: string;
  @Column({ type: 'int' })
  numSerial: number;
  @Column({ type: 'varchar', length: 50 })
  brand: string;
  @Column({ type: 'boolean' })
  status: boolean;
  @Column({ type: 'int' })
  amount: number;
  @Column({ type: 'int' })
  price: number;
  @Column({ type: 'varchar', length: 50 })
  category: string;
}
