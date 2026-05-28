/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { VehicleController } from './vehicle.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { VEHICLE_SERVICE } from 'src/config/service';
import { envs } from 'src/config/envs';

@Module({
  controllers: [VehicleController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: VEHICLE_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.vehicleMicroserviceHost,
          port: envs.vehicleMicroservicePort,
        },
      },
    ]),
  ],
})
export class VehicleModule {}
