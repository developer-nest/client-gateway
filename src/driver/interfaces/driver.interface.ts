/* eslint-disable prettier/prettier */
import { UpdateDriverDto } from '../dto/update-driver.dto';
import { DriverSituation } from '../enum/status.enum';

// export interface DriverById {
//   id: string;
// }

// export interface Driver {
//   id: string;
//   fullName: string;
//   address: string;
//   idCard: string;
//   dateIn: string;
//   dateEnd: string;
//   isActive: boolean;
//   status: StatusDriver;
// }

// export interface DriverList {
//   items: Driver[];
// }

// // En el mismo controller o en el archivo de interfaces
// export interface UpdateDriverRequest extends UpdateDriverDto {
//   id: string;
// }

export interface DriverById {
  id: string;
}

export interface Driver {
  id: string | null;
  fullName: string | null;
  address: string | null;
  idCard: string | null;
  isActive: boolean | null;
  category: string | null;
  fixedVehicleId?: string | null;
  currentSituation: DriverSituation | null;
}

export interface DriverList {
  items: Driver[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// export interface CreateDriver {
//   fullName: string;
//   address: string;
//   idCard: string;
//   isActive: boolean;
//   category: string;
//   fixedVehicleId?: string;
//   currentSituation?: DriverSituation;
// }

// En el mismo controller o en el archivo de interfaces
export interface UpdateDriverRequest extends UpdateDriverDto {
  id: string;
}

// export interface UpdateDriver extends Partial<CreateDriver> {
//   id: string;
// }

// export interface Pagination {
//   limit: number;
//   page: number;
// }

// export interface StatusDriverPagination extends Pagination {
//   situation?: DriverSituation;
//   isActive?: boolean;
// }
