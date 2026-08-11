import { Observable } from 'rxjs';
import { ById } from 'src/common';

export enum ChangeType {
  PASSENGER_COUNT = 'PASSENGER_COUNT',
  START_TIME = 'START_TIME',
  SCHEDULE = 'SCHEDULE',
  VEHICLE = 'VEHICLE',
  DRIVER = 'DRIVER',
}

export interface ModificationResponse {
  id: string;
  date: string; // 👈 string, como pide el proto (viene de Date)
  changeType: ChangeType;
  newValue: string; // 👈 string
  driverId?: string;
  vehicleId?: string;
  requestId: string;
}

// ==========================
// Filtro
// ==========================

export interface ModificationFilter {
  page?: number;
  limit?: number;
  date?: string;
  changeType?: ChangeType;
  requestId?: string;
}

// ==========================
// Lista (para el Controller, con Response)
// ==========================

export interface ModificationList {
  items: ModificationResponse[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ModificationServiceClient {
  findAll(data: ModificationFilter): Observable<ModificationList>;
  findOne(data: ById): Observable<ModificationResponse>;
}
