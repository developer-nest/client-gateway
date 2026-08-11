import { PartialType, OmitType } from '@nestjs/mapped-types';
import { IsOptional, IsNumber, IsPositive, Matches } from 'class-validator';
import { CreateRouteSheetDto } from './create-route-sheet.dto';

export class UpdateRouteSheetDto extends PartialType(
  OmitType(CreateRouteSheetDto, ['driverId', 'vehicleId'] as const),
) {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  kmEnd?: number;

  @IsOptional()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:([0-5]\d))?$/, {
    message: 'endTime debe tener formato HH:mm o HH:mm:ss',
  })
  endTime?: string;
}
