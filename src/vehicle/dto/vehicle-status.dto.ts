/* eslint-disable prettier/prettier */
import { IsBoolean, IsEnum, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { PaginationDTO } from 'src/common';
import { CarStatus } from '../enum/status.enum';

export class VehicleStatusDto extends PaginationDTO {
  @IsOptional()
  @IsEnum(CarStatus)
  status?: CarStatus;

  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true' || value === '1') return true;
    if (value === 'false' || value === '0') return false;
    return value;
  })
  @IsBoolean()
  isActive?: boolean;
}
