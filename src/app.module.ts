/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { VehicleModule } from './vehicle/vehicle.module';
import { DriverModule } from './driver/driver.module';

@Module({
  imports: [VehicleModule, DriverModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
