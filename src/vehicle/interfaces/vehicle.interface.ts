/* eslint-disable prettier/prettier */
//import { StatusDriver } from '../enum/status.enum';

import { UpdateVehicleDto } from '../dto/update-vehicle.dto';
import { StatusVehicle } from '../enum/status.enum';

export interface VehicleById {
  id: string;
}

export interface Vehicle {
  id: string;
  numCar: string;
  seatCount: number;
  currentMileage: number;
  brand: string;
  dateIn: string;
  dateEnd: string;
  isActive: boolean;
  status: StatusVehicle;
}

export interface VehicleList {
  items: Vehicle[];
}

export interface UpdateVehicleRequest extends UpdateVehicleDto {
  id: string;
}
