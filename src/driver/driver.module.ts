/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { DriverController } from './driver.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DRIVER_SERVICE } from 'src/config/service';
import { envs } from 'src/config/envs';

@Module({
  controllers: [DriverController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: DRIVER_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.driverMicroserviceHost,
          port: envs.driverMicroservicePort,
        },
      },
    ]),
  ],
})
export class DriverModule {}
