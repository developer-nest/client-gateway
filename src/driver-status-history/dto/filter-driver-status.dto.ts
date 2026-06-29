import { IsUUID, IsOptional, IsEnum, IsDateString } from 'class-validator';
import { PaginationDTO } from 'src/common';
import { DriverSituation } from 'src/driver/enum/status.enum';

export class FilterDriverStatusHistoryDto extends PaginationDTO{
  @IsUUID()
  @IsOptional()
  driverId?: string;

  @IsEnum(DriverSituation)
  @IsOptional()
  status?: DriverSituation;

  // Filtro por rango de fechas (cuándo se registró el cambio de estado)
  @IsDateString()
  @IsOptional()
  startDate?: string;

  @IsDateString()
  @IsOptional()
  endDate?: string;
}
