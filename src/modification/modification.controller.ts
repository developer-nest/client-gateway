import {
  Controller,
  Get,
  Param,
  OnModuleInit,
  Query,
  Inject,
} from '@nestjs/common';
import { ModificationServiceClient } from './interface/modification.interface';
import { MAINTENANCE_SERVICE } from 'src/config/service';
import { ClientGrpc } from '@nestjs/microservices';
import { ModificationFilterDto } from './dto/filter-modification.dto';

@Controller('modification')
export class ModificationController implements OnModuleInit {
  private modificationService: ModificationServiceClient;
  constructor(
    @Inject(MAINTENANCE_SERVICE) private modificationClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.modificationService =
      this.modificationClient.getService<ModificationServiceClient>(
        'ModificationService',
      );
  }

  @Get()
  findAll(@Query() filter: ModificationFilterDto) {
    return this.modificationService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modificationService.findOne({ id });
  }
}
