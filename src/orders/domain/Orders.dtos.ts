import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
  @IsString()
  @IsNotEmpty()
  details: string;
  @IsString()
  @IsNotEmpty()
  shippingAddress: string;
  @IsString()
  @IsNotEmpty()
  createAt: string;
  @IsString()
  @IsNotEmpty()
  updateAt: string;
  @IsString()
  @IsNotEmpty()
  status: string;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
