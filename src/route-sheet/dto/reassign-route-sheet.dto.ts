import { IsUUID, IsOptional } from 'class-validator';

export class ReassignRouteSheetDto {
  @IsOptional()
  @IsUUID()
  driverId?: string;

  @IsOptional()
  @IsUUID()
  vehicleId?: string;
}
