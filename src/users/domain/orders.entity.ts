import { Product } from 'src/productos/domain/Products.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  user: User;
  products: Product[];
  @Column({ type: 'varchar', length: 255 })
  details: string;
  @Column({ type: 'varchar', length: 50 })
  shippingAddress: string;
  @Column({ type: 'datetime' })
  createAt: Date;
  @Column({ type: 'datetime' })
  updateAt?: Date;
  @Column({ type: 'varchar', length: 10 })
  status: string;
}
