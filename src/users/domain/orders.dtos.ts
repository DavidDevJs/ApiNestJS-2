import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  id: number;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  details: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  shippingAddress: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  status: string;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
