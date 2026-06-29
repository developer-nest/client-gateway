import { IsDateString, IsEnum, IsOptional, IsUUID } from 'class-validator';
import { DriverSituation } from 'src/driver/enum/status.enum';

export class CreateDriverStatusHistoryDto {
  @IsUUID()
  driverId: string;

  @IsEnum(DriverSituation)
  status: DriverSituation;

  @IsOptional()
  @IsDateString()
  returnDate?: string;
}
