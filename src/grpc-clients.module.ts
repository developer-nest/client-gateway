/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { FLEET_SERVICE } from './config/service';
import { envs } from './config/envs';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: FLEET_SERVICE,
        transport: Transport.GRPC,
        options: {
          package: 'fleetService',
          protoPath: join(__dirname, 'proto/fleet-service.proto'),
          url: `${envs.fleetMicroserviceHost}:${envs.fleetMicroservicePort}`,
          loader: { enums: String },
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class GrpcClientsModule {}
