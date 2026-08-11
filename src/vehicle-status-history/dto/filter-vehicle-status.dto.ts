import { IsUUID, IsOptional, IsEnum, IsDateString } from 'class-validator';
import { PaginationDTO } from 'src/common';

import { CarStatus } from 'src/vehicle/enum/status.enum';

export class FilterVehicleStatusHistoryDto extends PaginationDTO {
  @IsUUID()
  @IsOptional()
  vehicleId?: string;

  @IsEnum(CarStatus)
  @IsOptional()
  status?: CarStatus;

  @IsDateString()
  @IsOptional()
  date?: string;

  // Filtro por rango de fechas (cuándo se registró el cambio de estado)
  @IsDateString()
  @IsOptional()
  dateFrom?: string;

  @IsDateString()
  @IsOptional()
  dateTo?: string;
}
