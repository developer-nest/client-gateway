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
  HttpStatus,
} from '@nestjs/common';

import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { DRIVER_SERVICE } from 'src/config/service';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { PaginationDTO } from 'src/common';
import { firstValueFrom } from 'rxjs';

@Controller('driver')
export class DriverController {
  constructor(@Inject(DRIVER_SERVICE) private driversClient: ClientProxy) {}

  async create(@Body() createDriverDto: CreateDriverDto) {
    try {
      return await firstValueFrom(
        this.driversClient.send('createDriver', createDriverDto),
      );
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Get()
  findAll(@Query() paginationDTO: PaginationDTO) {
    return this.driversClient.send('findAllDriver', paginationDTO);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await firstValueFrom(
      this.driversClient.send('findOneDriver', { id }),
    );
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDriverDto: UpdateDriverDto,
  ) {
    return await firstValueFrom(
      this.driversClient.send('updateDriver', { id, ...updateDriverDto }),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await firstValueFrom(
      this.driversClient.send('removeDriver', { id }),
    );
  }
}
