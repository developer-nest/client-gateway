import { Module } from '@nestjs/common';

import { DriverStatusHistoryController } from './driver-status-history.controller';
import { GrpcClientsModule } from 'src/grpc-clients.module';

@Module({
  controllers: [DriverStatusHistoryController],
  providers: [],
  imports: [GrpcClientsModule],
})
export class DriverStatusHistoryModule {}
