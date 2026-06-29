/* eslint-disable prettier/prettier */
//import { Pagination } from 'src/common';

import { DriverSituation } from 'src/driver/enum/status.enum';
import { Driver } from 'src/driver/interfaces/driver.interface';

export interface DriverStatusHistory {
  id: string | null;
  date: Date | null;
  driverId: string | null;
  status: DriverSituation | null;
  returnDate?: Date | null;
  driver?: Driver | null;
}

export interface DriverStatusHistoryList {
  items: DriverStatusHistory[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
