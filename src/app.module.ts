/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { VehicleModule } from './vehicle/vehicle.module';
import { DriverModule } from './driver/driver.module';
import { GrpcClientsModule } from './grpc-clients.module';

import { DriverStatusHistoryModule } from './driver-status-history/driver-status-history.module';
import { VehicleStatusHistoryModule } from './vehicle-status-history/vehicle-status-history.module';
import { TransportRequestModule } from './transport-request/transport-request.module';
import { ModificationModule } from './modification/modification.module';
import { RouteSheetModule } from './route-sheet/route-sheet.module';

@Module({
  imports: [VehicleModule, DriverModule, GrpcClientsModule, DriverStatusHistoryModule, VehicleStatusHistoryModule, TransportRequestModule, ModificationModule, RouteSheetModule],
  exports: [],
})
export class AppModule {}
