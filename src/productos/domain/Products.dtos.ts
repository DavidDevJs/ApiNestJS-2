import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly numSerial: number;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly brand: string;
  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  readonly status: boolean;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly amount: number;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;
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
  readonly category: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
