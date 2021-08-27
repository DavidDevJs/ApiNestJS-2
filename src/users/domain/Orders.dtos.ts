import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

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
  @IsDate()
  @IsNotEmpty()
  createAt: Date;
  @IsDate()
  @IsNotEmpty()
  updateAt: Date;
  @IsString()
  @IsNotEmpty()
  status: string;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
