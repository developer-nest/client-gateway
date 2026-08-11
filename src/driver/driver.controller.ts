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

import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
//import { DRIVER_SERVICE } from 'src/config/service';
import { ClientGrpc } from '@nestjs/microservices';
import { PaginationDTO } from 'src/common';
import { Observable } from 'rxjs';
import {
  Driver,
  DriverById,
  DriverDetail,
  DriverList,
  UpdateDriverRequest,
} from './interfaces/driver.interface';
import { StatusDriverDto } from './dto/status-driver.dto';
import { FLEET_SERVICE } from 'src/config/service';

interface DriverServiceClient {
  create(data: CreateDriverDto): Observable<Driver>;
  findAll(data: StatusDriverDto): Observable<DriverList>;
  findOne(data: DriverById): Observable<DriverDetail>;
  update(data: UpdateDriverRequest): Observable<Driver>;
  remove(data: DriverById): Observable<Driver>;
}

@Controller('driver')
export class DriverController implements OnModuleInit {
  private driverService: DriverServiceClient;
  constructor(@Inject(FLEET_SERVICE) private driversClient: ClientGrpc) {}

  onModuleInit() {
    this.driverService =
      this.driversClient.getService<DriverServiceClient>('DriverService');
  }
  @Post()
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.create(createDriverDto);
  }

  @Get()
  findAll(@Query() statusDriverDto: StatusDriverDto) {
    return this.driverService.findAll(statusDriverDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log('¡Petición recibida!', id);
    return this.driverService.findOne({ id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    //console.log('¡Petición recibida!', id, updateDriverDto);
    return this.driverService.update({ id, ...updateDriverDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverService.remove({ id });
  }
}
