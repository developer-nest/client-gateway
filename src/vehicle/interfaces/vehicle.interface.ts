/* eslint-disable prettier/prettier */
//import { StatusDriver } from '../enum/status.enum';

import { UpdateVehicleDto } from '../dto/update-vehicle.dto';
import { CarStatus } from '../enum/status.enum';

export interface VehicleById {
  id: string;
}

export interface Vehicle {
  id: string;
  numCar: string;
  seatCount: number;
  currentMileage: number;
  brand: string;
  isActive: boolean;
  currentSituation: CarStatus;
  //status: StatusVehicle;
}

export interface AvailabilityFilter {
  date: string;
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
