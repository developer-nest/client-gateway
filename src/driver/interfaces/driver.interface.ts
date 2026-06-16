/* eslint-disable prettier/prettier */
import { UpdateDriverDto } from '../dto/update-driver.dto';
import { StatusDriver } from '../enum/status.enum';

export interface DriverById {
  id: string;
}

export interface Driver {
  id: string;
  fullName: string;
  address: string;
  idCard: string;
  dateIn: string;
  dateEnd: string;
  isActive: boolean;
  status: StatusDriver;
}

export interface DriverList {
  items: Driver[];
}

// En el mismo controller o en el archivo de interfaces
export interface UpdateDriverRequest extends UpdateDriverDto {
  id: string;
}
