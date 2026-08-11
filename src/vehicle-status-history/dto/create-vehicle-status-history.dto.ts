import { IsDateString, IsEnum, IsOptional, IsUUID } from 'class-validator';
import { CarStatus } from 'src/vehicle/enum/status.enum';

export class CreateVehicleStatusHistoryDto {
  @IsUUID()
  vehicleId: string;

  @IsEnum(CarStatus)
  status: CarStatus;

  @IsOptional()
  @IsDateString()
  returnDate?: string;
}
