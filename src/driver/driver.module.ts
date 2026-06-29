/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { DriverController } from './driver.controller';
import { GrpcClientsModule } from 'src/grpc-clients.module';

@Module({
  controllers: [DriverController],
  providers: [],
  imports: [GrpcClientsModule],
})
export class DriverModule {}
