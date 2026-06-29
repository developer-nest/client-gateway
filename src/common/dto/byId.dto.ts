import { IsOptional, IsUUID } from 'class-validator';

export class ByIdDto {
  @IsUUID()
  @IsOptional()
  id?: string;
}
