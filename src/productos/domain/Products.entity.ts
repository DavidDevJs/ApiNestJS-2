import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 255 })
  nombre: string;
  @Column({ type: 'text' })
  description: string;
  @Column({ type: 'mediumint', unique: true })
  numSerial: number;
  @Column({ type: 'varchar', length: 50 })
  marca: string;
  @Column({ type: 'boolean' })
  status: boolean;
  @Column({ type: 'int' })
  cantidad: number;
  @Column({ type: 'int' })
  precio: number;
  @Column({ type: 'timestamp' })
  creatAt: string;
  @Column({ type: 'timestamp' })
  updateAt: string;
  @Column({ type: 'varchar', length: 50 })
  categoria: string;
}
