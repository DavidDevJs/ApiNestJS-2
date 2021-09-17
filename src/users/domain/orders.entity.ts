import { Product } from 'src/productos/domain/Products.entity';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  ser: User;
  products: Product[];
  details: string;
  shippingAddress: string;
  createAt: Date;
  updateAt?: Date;
  status: string;
}
