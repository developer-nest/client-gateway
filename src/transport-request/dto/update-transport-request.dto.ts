import { PartialType } from '@nestjs/mapped-types';
import { CreateTransportRequestDto } from './create-transport-request.dto';

export class UpdateTransportRequestDto extends PartialType(
  CreateTransportRequestDto,
) {}
