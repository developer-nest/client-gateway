import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  OnModuleInit,
  Inject,
  Query,
} from '@nestjs/common';
import { CreateRouteSheetDto } from './dto/create-route-sheet.dto';
import { UpdateRouteSheetDto } from './dto/update-route-sheet.dto';
import { MAINTENANCE_SERVICE } from 'src/config/service';
import { ClientGrpc } from '@nestjs/microservices';
import { RouteSheetServiceClient } from './interface/route-sheet.interface';
import { RouteSheetFilterDto } from './dto/filter-route-sheet.dto';
import { ReassignRouteSheetDto } from './dto/reassign-route-sheet.dto';

@Controller('route-sheet')
export class RouteSheetController implements OnModuleInit {
  private routeSheetService: RouteSheetServiceClient;
  constructor(
    @Inject(MAINTENANCE_SERVICE) private routeSheetClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.routeSheetService =
      this.routeSheetClient.getService<RouteSheetServiceClient>(
        'RouteSheetService',
      );
  }

  @Post()
  create(@Body() createRouteSheetDto: CreateRouteSheetDto) {
    return this.routeSheetService.create(createRouteSheetDto);
  }

  @Get()
  findAll(@Query() filter: RouteSheetFilterDto) {
    return this.routeSheetService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routeSheetService.findOne({ id });
  }

  @Patch(':id/reassign')
  reassign(
    @Param('id') id: string,
    @Body() reassignRouteSheetDto: ReassignRouteSheetDto,
  ) {
    return this.routeSheetService.reassign({ id, ...reassignRouteSheetDto });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRouteSheetDto: UpdateRouteSheetDto,
  ) {
    return this.routeSheetService.update({ id, ...updateRouteSheetDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routeSheetService.remove({ id });
  }
}
