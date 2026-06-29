/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { VehicleController } from './vehicle.controller';
import { GrpcClientsModule } from 'src/grpc-clients.module';

@Module({
  controllers: [VehicleController],
  providers: [],
  imports: [GrpcClientsModule],
})
export class VehicleModule {}
