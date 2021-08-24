import { PartialType } from '@nestjs/mapped-types';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly fullName: string;
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  readonly password: string;
  @IsString()
  @IsNotEmpty()
  readonly position: string;
  @IsString()
  @IsNotEmpty()
  readonly phoneNumber: string;
  @IsString()
  @IsNotEmpty()
  readonly address: string;
  @IsDate()
  @IsNotEmpty()
  readonly createAt: string;
  @IsDate()
  @IsNotEmpty()
  readonly updateAt: string;
  @IsBoolean()
  @IsNotEmpty()
  readonly status: boolean;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
