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
import { DRIVER_SERVICE } from 'src/config/service';
import { ClientGrpc } from '@nestjs/microservices';
import { PaginationDTO } from 'src/common';
import { Observable } from 'rxjs';
import {
  Driver,
  DriverById,
  DriverList,
  UpdateDriverRequest,
} from './interfaces/driver.interface';

interface DriverServiceClient {
  create(data: CreateDriverDto): Observable<Driver>;
  findAll(data: PaginationDTO): Observable<DriverList>;
  findOne(data: DriverById): Observable<Driver>;
  update(data: UpdateDriverRequest): Observable<Driver>;
  remove(data: DriverById): Observable<Driver>;
}

@Controller('driver')
export class DriverController implements OnModuleInit {
  private driverService: DriverServiceClient;
  constructor(@Inject(DRIVER_SERVICE) private driversClient: ClientGrpc) {}

  onModuleInit() {
    this.driverService =
      this.driversClient.getService<DriverServiceClient>('DriverService');
  }
  @Post()
  create(@Body() createDriverDto: CreateDriverDto) {
    console.log('¡Petición recibida!', createDriverDto);
    return this.driverService.create(createDriverDto);
  }

  @Get()
  findAll(@Query() paginationDTO: PaginationDTO) {
    return this.driverService.findAll(paginationDTO);
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
