import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  readonly fullName: string;
  @IsString()
  @IsNotEmpty()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  readonly phoneNumber: string;
  @IsString()
  @IsNotEmpty()
  readonly address: string;
  @IsString()
  @IsNotEmpty()
  readonly city: string;
  @IsString()
  @IsNotEmpty()
  readonly country: string;
  @IsString()
  @IsNotEmpty()
  readonly createAt: string;
  @IsString()
  @IsNotEmpty()
  readonly updateAt: string;
}

export class UptdateClientDto extends PartialType(CreateClientDto) {}
