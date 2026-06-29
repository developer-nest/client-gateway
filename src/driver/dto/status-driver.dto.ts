/* eslint-disable prettier/prettier */
import { IsBoolean, IsEnum, IsOptional } from 'class-validator';
import { PaginationDTO } from 'src/common';
import { DriverSituation } from '../enum/status.enum';
import { Transform } from 'class-transformer';

export class StatusDriverDto extends PaginationDTO {
  @IsOptional()
  @IsEnum(DriverSituation, {
    message:
      'typeProgramming debe ser: transfer, visita, circuito, excursión, libre',
  })
  status?: DriverSituation;

  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true' || value === '1') return true;
    if (value === 'false' || value === '0') return false;
    return value;
  })
  @IsBoolean()
  isActive?: boolean;
}
