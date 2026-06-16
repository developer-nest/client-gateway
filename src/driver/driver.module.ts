/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { DriverController } from './driver.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DRIVER_SERVICE } from 'src/config/service';
import { envs } from 'src/config/envs';
import { join } from 'path';

@Module({
  controllers: [DriverController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: DRIVER_SERVICE,
        transport: Transport.GRPC,
        options: {
          package: 'driver',
          protoPath: join(__dirname, 'driver.proto'),
          url: `${envs.driverMicroserviceHost}:${envs.driverMicroservicePort}`,
          loader: {
            enums: String,
          },
        },
      },
    ]),
  ],
})
export class DriverModule {}
