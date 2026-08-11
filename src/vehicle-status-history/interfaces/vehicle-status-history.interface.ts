import { Observable } from 'rxjs';
import { ById } from 'src/common';
import { CarStatus } from 'src/vehicle/enum/status.enum';
import { CreateVehicleStatusHistoryDto } from '../dto/create-vehicle-status-history.dto';
import { FilterVehicleStatusHistoryDto } from '../dto/filter-vehicle-status.dto';
import { Vehicle } from 'src/vehicle/interfaces/vehicle.interface';

export interface VehicleStatusHistory {
  id: string;
  date: Date;
  vehicleId: string;
  status: CarStatus;
  returnDate?: Date;
  Vehicle?: Vehicle;
}

export interface VehicleStatusHistoryList {
  items: VehicleStatusHistory[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface VehicleStatusHistoryServiceClient {
  create(data: CreateVehicleStatusHistoryDto): Observable<VehicleStatusHistory>;
  findAll(
    data: FilterVehicleStatusHistoryDto,
  ): Observable<VehicleStatusHistoryList>;
  findOne(data: ById): Observable<VehicleStatusHistory>;
}
