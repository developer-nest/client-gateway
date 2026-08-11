import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsUUID,
  IsOptional,
  Matches,
} from 'class-validator';

export class CreateRouteSheetDto {
  @IsString()
  @IsNotEmpty()
  date: string; // validado con @Matches abajo, no @IsDateString (ver nota)

  @IsNumber()
  @IsPositive()
  kmStart: number;

  @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:([0-5]\d))?$/, {
    message: 'startTime debe tener formato HH:mm o HH:mm:ss',
  })
  startTime: string;

  @IsUUID()
  driverId: string;

  @IsUUID()
  vehicleId: string;

  @IsOptional()
  @IsUUID()
  copilotId?: string;

  @IsUUID()
  requestId: string;
}
