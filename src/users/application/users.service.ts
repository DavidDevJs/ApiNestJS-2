import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from '../domain/Orders.entity';
import { CreateUserDto, UpdateUserDto } from '../domain/user.dtos';
import { User } from '../domain/user.entity';
import { ProductsService } from 'src/productos/application/products.service';

@Injectable()
export class UsersService {
  constructor(private productService: ProductsService) {}

  private idAutoIncrement = 0;

  Users: User[] = [
    {
      id: 0,
      fullName: 'David Gonzalez',
      email: 'example@gmail.com',
      password: 'asdfiuisdufci23!@#$#@$',
      position: 'gerente',
      phoneNumber: '3210342211',
      address: 'Calle 1 N 3 - 11',
      createAt: '01-01-2021 08:22',
      updateAt: '01-01-2021 09:34',
      status: true,
    },
  ];

  findAll() {
    return this.Users;
  }

  findOne(id: number) {
    const user = this.Users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`user id ${id} not found`);
    }
    return user;
  }

  create(payload: CreateUserDto) {
    this.idAutoIncrement += 1;
    const newuser = {
      id: this.idAutoIncrement,
      ...payload,
    };
    this.Users.push(newuser);
    return newuser;
  }

  update(id: number, payload: UpdateUserDto) {
    const user = this.findOne(id);

    if (!user) {
      throw new NotFoundException(`user id ${id} not found`);
    }
    const index = this.Users.findIndex((item) => item.id === id);
    this.Users[index] = {
      ...user,
      ...payload,
    };
    return this.Users[index];
  }

  delete(id: number) {
    const index = this.Users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`user id ${id} not found`);
    }
    this.Users.splice(index, 1);
    return true;
  }

  getOrdersByUser(id: number): Order {
    const user = this.findOne(id);
    return {
      user,
      products: this.productService.findAll(),
      details: 'Orden 1 del usuario {id}',
      shippingAddress: 'Calle 1',
      updateAt: new Date(),
      status: 'Pendiente',
    };
  }
}
