import { Module } from '@nestjs/common';
import { ProductsService } from './application/products.service';
import { ProductsController } from './infrastructure/products.controller';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductosModule {}
