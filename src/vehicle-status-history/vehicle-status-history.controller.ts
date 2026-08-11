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

import { CreateVehicleStatusHistoryDto } from './dto/create-vehicle-status-history.dto';
import { FLEET_SERVICE } from 'src/config/service';
import { ClientGrpc } from '@nestjs/microservices';
import { VehicleStatusHistoryServiceClient } from './interfaces/vehicle-status-history.interface';
import { FilterVehicleStatusHistoryDto } from './dto/filter-vehicle-status.dto';

@Controller('vehicle-history')
export class VehicleStatusHistoryController implements OnModuleInit {
  private vehicleStatusHistoryService: VehicleStatusHistoryServiceClient;

  constructor(
    @Inject(FLEET_SERVICE) private vehiclesStatusClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.vehicleStatusHistoryService =
      this.vehiclesStatusClient.getService<VehicleStatusHistoryServiceClient>(
        'VehicleStatusService',
      );
  }

  @Post()
  create(@Body() createVehicleStatusHistoryDto: CreateVehicleStatusHistoryDto) {
    return this.vehicleStatusHistoryService.create(
      createVehicleStatusHistoryDto,
    );
  }

  @Get()
  findAll(
    @Query() filterVehicleStatusHistoryDto: FilterVehicleStatusHistoryDto,
  ) {
    return this.vehicleStatusHistoryService.findAll(
      filterVehicleStatusHistoryDto,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehicleStatusHistoryService.findOne({ id });
  }
}
