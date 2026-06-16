/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { VehicleController } from './vehicle.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { VEHICLE_SERVICE } from 'src/config/service';
import { envs } from 'src/config/envs';
import { join } from 'path';

@Module({
  controllers: [VehicleController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: VEHICLE_SERVICE,
        transport: Transport.GRPC,
        options: {
          package: 'vehicle',
          protoPath: join(__dirname, 'vehicle.proto'),
          url: `${envs.vehicleMicroserviceHost}:${envs.vehicleMicroservicePort}`,
          loader: {
            enums: String,
          },
        },
      },
    ]),
  ],
})
export class VehicleModule {}
