import { Module } from '@nestjs/common';
import { UsersService } from './application/users.service';
import { UsersController } from './infrastructure/users.controller';
import { ProductosModule } from 'src/productos/productos.module';

@Module({
  imports: [ProductosModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
