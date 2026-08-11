import { IsOptional, IsDateString, IsString, IsEnum } from 'class-validator';

import { PaginationDTO } from 'src/common';
import { ChangeType } from '../interface/modification.interface';

export class ModificationFilterDto extends PaginationDTO {
  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @IsString()
  requestId?: string;

  @IsOptional()
  @IsEnum(ChangeType)
  changeType?: ChangeType;
}
