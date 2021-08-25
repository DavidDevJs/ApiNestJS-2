import { Module } from '@nestjs/common';
import { OrdersController } from './infrastructure/orders.controller';
import { ClientsController } from './infrastructure/clients.controller';
import { SuppliersController } from './infrastructure/suppliers.controller';
import { ClientsService } from './application/clients.service';
import { OrdersService } from './application/orders.service';
import { SupplierService } from './application/supplier.service';

@Module({
  controllers: [OrdersController, ClientsController, SuppliersController],
  providers: [ClientsService, OrdersService, SupplierService],
})
export class OrdersModule {}
