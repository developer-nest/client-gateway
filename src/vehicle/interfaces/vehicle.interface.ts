/* eslint-disable prettier/prettier */
//import { StatusDriver } from '../enum/status.enum';

import { UpdateVehicleDto } from '../dto/update-vehicle.dto';
import { CarStatus } from '../enum/status.enum';

export interface VehicleById {
  id: string;
}

export interface Vehicle {
  id: string | null;
  numCar: string | null;
  seatCount: number;
  currentMileage: number | null;
  brand: string | null;
  isActive: boolean | null;
  currentSituation: CarStatus | null;
  //status: StatusVehicle;
}

export interface VehicleList {
  items: Vehicle[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface UpdateVehicleRequest extends UpdateVehicleDto {
  id: string;
}
