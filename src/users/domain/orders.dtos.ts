import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

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
  @IsDate()
  @IsNotEmpty()
  createAt: Date;
  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  updateAt: Date;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  status: string;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
