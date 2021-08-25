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
import { CreateClientDto, UptdateClientDto } from '../domain/Clients.dtos';
import { ClientsService } from '../application/clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) {}

  @Post()
  create(@Body() payload: CreateClientDto) {
    return this.clientsService.create(payload);
  }

  @Get()
  getAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.clientsService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UptdateClientDto,
  ) {
    return this.clientsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.clientsService.delete(id);
  }
}
