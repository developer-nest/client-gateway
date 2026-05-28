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
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { PaginationDTO } from 'src/common';
import { VEHICLE_SERVICE } from 'src/config/service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Controller('vehicle')
export class VehicleController {
  constructor(@Inject(VEHICLE_SERVICE) private vehiclesClient: ClientProxy) {}

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehiclesClient.send(
      { cmd: 'create_vehicle' },
      createVehicleDto,
    );
  }

  @Get()
  findAll(@Query() paginationDTO: PaginationDTO) {
    return this.vehiclesClient.send({ cmd: 'find_all_vehicle' }, paginationDTO);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await firstValueFrom(
        this.vehiclesClient.send({ cmd: 'find_one_vehicle' }, { id }),
      );
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateVehicleDto: UpdateVehicleDto,
  ) {
    try {
      return await firstValueFrom(
        this.vehiclesClient.send(
          { cmd: 'update_vehicle' },
          { id, ...updateVehicleDto },
        ),
      );
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await firstValueFrom(
        this.vehiclesClient.send({ cmd: 'delete_vehicle' }, { id }),
      );
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
``