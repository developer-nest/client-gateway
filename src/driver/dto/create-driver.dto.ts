/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */

import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsUUID,
  IsBoolean,
} from 'class-validator';
import { DriverSituation } from '../enum/status.enum';

// Suponiendo que tienes este enum definido en tu código

export class CreateDriverDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  idCard: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsOptional()
  @IsEnum(DriverSituation)
  currentSituation?: DriverSituation;

  @IsOptional()
  @IsUUID()
  fixedVehicleId?: string;
}
