import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Body,
  Delete,
  Post,
} from '@nestjs/common';
import { SupplierService } from '../application/supplier.service';
import { CreateSupplierDto, UpdateSupplierDto } from '../domain/Supplier.dtos';

@Controller('suppliers')
export class SuppliersController {
  constructor(private suppliersService: SupplierService) {}

  @Post()
  create(@Body() payload: CreateSupplierDto) {
    return this.suppliersService.create(payload);
  }

  @Get()
  getAll() {
    return this.suppliersService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.suppliersService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateSupplierDto,
  ) {
    return this.suppliersService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.suppliersService.delete(id);
  }
}
