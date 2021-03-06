import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly fullName: string;
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly password: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly position: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly phoneNumber: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly address: string;
  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  readonly status: boolean;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
