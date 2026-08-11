import { Module } from '@nestjs/common';
import { RouteSheetController } from './route-sheet.controller';
import { GrpcClientsModule } from 'src/grpc-clients.module';

@Module({
  controllers: [RouteSheetController],
  imports: [GrpcClientsModule],
})
export class RouteSheetModule {}
