/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  Query,
  OnModuleInit,
} from '@nestjs/common';
import { CreateTransportRequestDto } from './dto/create-transport-request.dto';
import { UpdateTransportRequestDto } from './dto/update-transport-request.dto';
import { ClientGrpc } from '@nestjs/microservices';
import { MAINTENANCE_SERVICE } from 'src/config/service';
import { TransportRequestServiceClient } from './interface/transport-request.interface';
import { TransportRequestFilterDto } from './dto/filter-transport-request.dto';
import { ArrastreFilter } from './dto/get-filter-arrastre.dto';

@Controller('transport-request')
export class TransportRequestController implements OnModuleInit {
  private transportRequestService: TransportRequestServiceClient;

  constructor(
    @Inject(MAINTENANCE_SERVICE) private transportRequestClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.transportRequestService =
      this.transportRequestClient.getService<TransportRequestServiceClient>(
        'TransportRequestService',
      );
  }

  @Post()
  create(@Body() createTransportRequestDto: CreateTransportRequestDto) {
    return this.transportRequestService.create(createTransportRequestDto);
  }

  @Get()
  findAll(@Query() transportRequestFilterDto: TransportRequestFilterDto) {
    return this.transportRequestService.findAll(transportRequestFilterDto);
  }

  @Get('arrastre')
  getArrastre(@Query() arrastreFilter: ArrastreFilter) {
    return this.transportRequestService.getArrastres(arrastreFilter);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transportRequestService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransportRequestDto: UpdateTransportRequestDto,
  ) {
    return this.transportRequestService.update({
      id,
      ...updateTransportRequestDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transportRequestService.remove({ id });
  }
}
