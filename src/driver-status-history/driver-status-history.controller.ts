/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  OnModuleInit,
  Inject,
  Query,
} from '@nestjs/common';

import { CreateDriverStatusHistoryDto } from './dto/create-driver-status-history.dto';
import { FLEET_SERVICE } from 'src/config/service';
import { ClientGrpc } from '@nestjs/microservices';
import {
  DriverStatusHistory,
  DriverStatusHistoryList,
} from './interfaces/driver-status-history.interface';
import { Observable } from 'rxjs';
import { ById } from 'src/common';
import { FilterDriverStatusHistoryDto } from './dto/filter-driver-status.dto';

interface DriverStatusHistoryServiceClient {
  create(data: CreateDriverStatusHistoryDto): Observable<DriverStatusHistory>;
  findAll(
    data: FilterDriverStatusHistoryDto,
  ): Observable<DriverStatusHistoryList>;
  findOne(data: ById): Observable<DriverStatusHistory>;
}

@Controller('driver-history')
export class DriverStatusHistoryController implements OnModuleInit {
  private driverStatusHistoryService: DriverStatusHistoryServiceClient;
  constructor(
    @Inject(FLEET_SERVICE) private driversVehiclesClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.driverStatusHistoryService =
      this.driversVehiclesClient.getService<DriverStatusHistoryServiceClient>(
        'DriverStatusService',
      );
  }
  @Post()
  create(@Body() createDriverStatusHistoryDto: CreateDriverStatusHistoryDto) {
    return this.driverStatusHistoryService.create(createDriverStatusHistoryDto);
  }

  @Get()
  findAll(@Query() filterDriverStatusHistoryDto: FilterDriverStatusHistoryDto) {
    return this.driverStatusHistoryService.findAll(
      filterDriverStatusHistoryDto,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverStatusHistoryService.findOne({ id });
  }
}
