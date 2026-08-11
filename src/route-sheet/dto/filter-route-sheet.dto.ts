import { IsOptional, IsDateString, IsUUID } from 'class-validator';
import { PaginationDTO } from 'src/common';

export class RouteSheetFilterDto extends PaginationDTO {
  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @IsUUID()
  driverId?: string;

  @IsOptional()
  @IsUUID()
  vehicleId?: string;

  @IsOptional()
  @IsUUID()
  requestId?: string;
}
