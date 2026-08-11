import { IsOptional, IsDateString, IsString, IsEnum } from 'class-validator';

import { ScheduleType } from '../enum/schedule.enum';
import { PaginationDTO } from 'src/common';

export class TransportRequestFilterDto extends PaginationDTO {
  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @IsString()
  groupCode?: string;

  @IsOptional()
  @IsEnum(ScheduleType)
  scheduleType?: ScheduleType;
}
