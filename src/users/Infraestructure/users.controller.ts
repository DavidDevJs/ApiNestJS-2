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
import { CreateUserDto, UpdateUserDto } from '../Domain/user.dtos';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() payload: CreateUserDto) {
    return `Se ha creado el usuario con los siguientes datos ${payload}`;
  }

  @Get()
  getAll() {
    return 'Todos los usuarios';
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return `Usuario con id ${id}`;
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateUserDto,
  ) {
    return `Usuario con id ${id} actualizado con la siguiente ingo ${payload}`;
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return `Eliminado el usuario ${id}`;
  }
}
