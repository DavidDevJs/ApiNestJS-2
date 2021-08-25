import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto, UpdateOrderDto } from '../domain/Orders.dtos';
import { Order } from '../domain/Orders.entity';

@Injectable()
export class OrdersService {
  private idAutoIncrement = 0;

  orders: Order[] = [
    {
      id: 0,
      details: 'Esta sera la orden 1',
      shippingAddress: 'Calle 1 N 2 - 3',
      createAt: '01-01-2021 3:00',
      updateAt: '01-01-2021 5:00',
      status: 'Pendiente',
    },
  ];

  findAll() {
    return this.orders;
  }

  findOne(id: number) {
    const order = this.orders.find((item) => item.id === id);
    if (!order) {
      throw new NotFoundException(`order id ${id} not found`);
    }
    return order;
  }

  create(payload: CreateOrderDto) {
    this.idAutoIncrement += 1;
    const neworder = {
      id: this.idAutoIncrement,
      ...payload,
    };
    this.orders.push(neworder);
    return neworder;
  }

  update(id: number, payload: UpdateOrderDto) {
    const order = this.findOne(id);

    if (!order) {
      throw new NotFoundException(`order id ${id} not found`);
    }
    const index = this.orders.findIndex((item) => item.id === id);
    this.orders[index] = {
      ...order,
      ...payload,
    };
    return this.orders[index];
  }

  delete(id: number) {
    const index = this.orders.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`order id ${id} not found`);
    }
    this.orders.splice(index, 1);
    return true;
  }
}
