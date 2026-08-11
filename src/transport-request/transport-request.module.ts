import { Module } from '@nestjs/common';
import { TransportRequestController } from './transport-request.controller';
import { GrpcClientsModule } from 'src/grpc-clients.module';

@Module({
  controllers: [TransportRequestController],
  imports: [GrpcClientsModule],
})
export class TransportRequestModule {}
