import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto, UpdateProductDto } from '../domain/Products.dtos';

import { Product } from '../domain/Products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  findAll() {
    return this.productRepo.find();
  }

  async findOne(id: number) {
    const product = await this.productRepo.findOne(id);
    if (!product) {
      throw new NotFoundException(`product id ${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    // const newProduct = new Product();
    // newProduct.name = payload.name;
    // newProduct.description = payload.description;
    // newProduct.numSerial = payload.numSerial;
    // newProduct.brand = payload.brand;
    // newProduct.price = payload.price;
    // newProduct.creatAt = payload.creatAt;
    // newProduct.updateAt = payload.updateAt;
    // newProduct.category = payload.category;
    const newProduct = this.productRepo.create(payload);

    return this.productRepo.save(newProduct);
  }

  async update(id: number, payload: UpdateProductDto) {
    const product = await this.productRepo.findOne(id);
    this.productRepo.merge(product, payload);
    return this.productRepo.save(product);
  }

  remove(id: number) {
    return this.productRepo.delete(id);
  }
}
