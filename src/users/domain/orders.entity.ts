import { Product } from 'src/productos/domain/Products.entity';
import { User } from './user.entity';

export class Order {
  user: User;
  products: Product[];
  details: string;
  shippingAddress: string;
  createAt?: Date;
  updateAt: Date;
  status: string;
}
