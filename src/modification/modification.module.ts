import { Module } from '@nestjs/common';
import { ModificationController } from './modification.controller';
import { GrpcClientsModule } from 'src/grpc-clients.module';

@Module({
  controllers: [ModificationController],
  imports: [GrpcClientsModule],
})
export class ModificationModule {}
