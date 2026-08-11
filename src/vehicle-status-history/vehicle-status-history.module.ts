import { Module } from '@nestjs/common';

import { VehicleStatusHistoryController } from './vehicle-status-history.controller';
import { GrpcClientsModule } from 'src/grpc-clients.module';

@Module({
  controllers: [VehicleStatusHistoryController],
  imports: [GrpcClientsModule],
})
export class VehicleStatusHistoryModule {}
