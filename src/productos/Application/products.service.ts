import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../Domain/Products.dtos';

import { Product } from '../Domain/Products.entity';

@Injectable()
export class ProductsService {
  private idAutoIncrement = 0;

  products: Product[] = [
    {
      id: 0,
      nombre: 'Producto 1',
      numSerial: 123456677,
      marca: 'Fruco',
      status: true,
      cantidad: 500,
      precio: 7000,
      creatAt: '01-01-2021 01:00',
      updateAt: '01-01-2021 05:22',
      categoria: 'Alimentos',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`product id ${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.idAutoIncrement += 1;
    const newproduct = {
      id: this.idAutoIncrement,
      ...payload,
    };
    this.products.push(newproduct);
    return newproduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);

    if (!product) {
      throw new NotFoundException(`product id ${id} not found`);
    }
    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = {
      ...product,
      ...payload,
    };
    return this.products[index];
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`product id ${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
  }
}
