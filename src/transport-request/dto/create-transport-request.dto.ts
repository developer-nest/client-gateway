import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsPositive,
  IsDateString,
  IsEnum,
  IsOptional,
  IsNumber,
  Matches,
  MaxLength,
} from 'class-validator';
import { ScheduleType } from '../enum/schedule.enum';

export class CreateTransportRequestDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  groupCode: string;

  @IsString()
  @IsNotEmpty()
  originCountry: string;

  @IsInt()
  @IsPositive()
  passengerCount: number;

  @IsDateString()
  date: string;

  @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:([0-5]\d))?$/, {
    message: 'startTime debe tener formato HH:mm o HH:mm:ss',
  })
  startTime: string;

  @IsEnum(ScheduleType)
  scheduleType: ScheduleType;

  @IsOptional()
  @IsString()
  scheduleDescription?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  delayTime?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  kmToTravel?: number;

  @IsOptional()
  @IsString()
  pickupLocation?: string;
}
