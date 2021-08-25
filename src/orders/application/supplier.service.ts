import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSupplierDto, UpdateSupplierDto } from '../domain/Supplier.dtos';
import { Supplier } from '../domain/Supplier.entity';

@Injectable()
export class SupplierService {
  private idAutoIncrement = 0;

  suppliers: Supplier[] = [
    {
      id: 0,
      fullName: 'Proveedor1',
      email: 'example@gmail.com',
      phoneNumber: '3124325566',
      city: 'Capital',
      country: 'Pais',
      address: 'Calle 1 N 2-3',
    },
  ];

  findAll() {
    return this.suppliers;
  }

  findOne(id: number) {
    const supplier = this.suppliers.find((item) => item.id === id);
    if (!supplier) {
      throw new NotFoundException(`supplier id ${id} not found`);
    }
    return supplier;
  }

  create(payload: CreateSupplierDto) {
    this.idAutoIncrement += 1;
    const newsupplier = {
      id: this.idAutoIncrement,
      ...payload,
    };
    this.suppliers.push(newsupplier);
    return newsupplier;
  }

  update(id: number, payload: UpdateSupplierDto) {
    const supplier = this.findOne(id);

    if (!supplier) {
      throw new NotFoundException(`supplier id ${id} not found`);
    }
    const index = this.suppliers.findIndex((item) => item.id === id);
    this.suppliers[index] = {
      ...supplier,
      ...payload,
    };
    return this.suppliers[index];
  }

  delete(id: number) {
    const index = this.suppliers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`supplier id ${id} not found`);
    }
    this.suppliers.splice(index, 1);
    return true;
  }
}
