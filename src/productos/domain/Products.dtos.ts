import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;
  @IsNumber()
  @IsNotEmpty()
  readonly numSerial: number;
  @IsString()
  @IsNotEmpty()
  readonly marca: string;
  @IsBoolean()
  @IsNotEmpty()
  readonly status: boolean;
  @IsNumber()
  @IsNotEmpty()
  readonly cantidad: number;
  @IsNumber()
  @IsNotEmpty()
  readonly precio: number;
  @IsString()
  @IsNotEmpty()
  readonly creatAt: string;
  @IsString()
  @IsNotEmpty()
  readonly updateAt: string;
  @IsString()
  @IsNotEmpty()
  readonly categoria: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
