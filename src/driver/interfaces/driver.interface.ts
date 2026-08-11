/* eslint-disable prettier/prettier */

import { UpdateDriverDto } from '../dto/update-driver.dto';
import { DriverSituation } from '../enum/status.enum';
import { Vehicle } from 'src/vehicle/interfaces/vehicle.interface';

export interface DriverById {
  id: string;
}

export interface Driver {
  id: string;
  fullName: string;
  address: string;
  idCard: string;
  isActive: boolean;
  category: string;
  fixedVehicleId?: string;
  currentSituation: DriverSituation;
}

export interface DriverDetail {
  id: string;
  fullName: string;
  address: string;
  idCard: string;
  isActive: boolean;
  category: string;
  fixedVehicleId?: string;
  fixedVehicle?: Vehicle; // nullable, populated si tiene carro fijo
  currentSituation: DriverSituation;
}

export interface DriverList {
  items: Driver[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// En el mismo controller o en el archivo de interfaces
export interface UpdateDriverRequest extends UpdateDriverDto {
  id: string;
}
