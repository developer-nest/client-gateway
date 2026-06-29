/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
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
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { PaginationDTO } from 'src/common';
import { FLEET_SERVICE } from 'src/config/service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import {
  UpdateVehicleRequest,
  Vehicle,
  VehicleById,
  VehicleList,
} from './interfaces/vehicle.interface';
import { VehicleStatusDto } from './dto/vehicle-status.dto';

interface VehicleServiceClient {
  create(data: CreateVehicleDto): Observable<Vehicle>;
  findAll(data: PaginationDTO): Observable<VehicleList>;
  findOne(data: VehicleById): Observable<Vehicle>;
  update(data: UpdateVehicleRequest): Observable<Vehicle>;
  remove(data: VehicleById): Observable<Vehicle>;
}

@Controller('vehicle')
export class VehicleController implements OnModuleInit {
  private vehicleService: VehicleServiceClient;
  constructor(@Inject(FLEET_SERVICE) private vehiclesClient: ClientGrpc) {}

  onModuleInit() {
    this.vehicleService =
      this.vehiclesClient.getService<VehicleServiceClient>('VehicleService');
  }

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehicleService.create(createVehicleDto);
  }

  @Get()
  findAll(@Query() vehicleStatusDto: VehicleStatusDto) {
    console.log(vehicleStatusDto);
    return this.vehicleService.findAll(vehicleStatusDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehicleService.findOne({ id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.vehicleService.update({ id, ...updateVehicleDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehicleService.remove({ id });
  }
}
