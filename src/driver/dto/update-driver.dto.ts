/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverDto } from './create-driver.dto';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateDriverDto extends PartialType(CreateDriverDto) {
  // @IsString()
  // @IsNotEmpty()
  // @IsUUID() // O el tipo de dato que uses para tu ID
  // id: string;
}
