import {
  IsString,
  IsNumber,
  IsBoolean,
  IsEnum,
  IsOptional,
  Min,
  IsNotEmpty,
} from 'class-validator';
import { CarStatus } from '../enum/status.enum';

export class CreateVehicleDto {
  @IsOptional()
  @IsString()
  numCar: string | null;

  @IsNotEmpty()
  @IsNumber()
  @Min(1) // Asumiendo que al menos debe haber 1 asiento
  seatCount: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  currentMileage: number | null;

  @IsOptional()
  @IsString()
  brand: string | null;

  @IsOptional()
  @IsBoolean()
  isActive!: boolean | null;

  @IsOptional()
  @IsEnum(CarStatus)
  currentSituation: CarStatus | null;
}
