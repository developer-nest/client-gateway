import { IsDateString } from 'class-validator';

export class ArrastreFilter {
  @IsDateString()
  date: string;
}
