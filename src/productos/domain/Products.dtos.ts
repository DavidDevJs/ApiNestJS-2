import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly numSerial: number;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly marca: string;
  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  readonly status: boolean;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly cantidad: number;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly precio: number;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly creatAt: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly updateAt: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly categoria: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
