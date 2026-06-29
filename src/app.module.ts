/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { VehicleModule } from './vehicle/vehicle.module';
import { DriverModule } from './driver/driver.module';
import { GrpcClientsModule } from './grpc-clients.module';
import { DriverVehiclesModule } from './driver-vehicles/driver-vehicles.module';
import { DriverStatusHistoryModule } from './driver-status-history/driver-status-history.module';

@Module({
  imports: [VehicleModule, DriverModule, GrpcClientsModule, DriverVehiclesModule, DriverStatusHistoryModule],
  exports: [],
})
export class AppModule {}
