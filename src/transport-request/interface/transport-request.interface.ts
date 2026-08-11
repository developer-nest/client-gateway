import { Observable } from 'rxjs';
import { ScheduleType } from '../enum/schedule.enum';
import { CreateTransportRequestDto } from '../dto/create-transport-request.dto';
import { UpdateTransportRequestDto } from '../dto/update-transport-request.dto';
import { ArrastreFilter } from '../dto/get-filter-arrastre.dto';

export interface TransportRequestResponse {
  id: string;
  groupCode: string;
  originCountry: string;
  passengerCount: number;
  date: string;
  startTime: string;
  scheduleType: ScheduleType;
  scheduleDescription?: string;
  delayTime?: number;
  kmToTravel?: number;
  pickupLocation?: string;
}

export interface ArrastreResponse {
  groupCode: string;
  originCountry: string;
  passengerCount: number;
  availableVehicleIds: string[];
  // date: eliminado
}

export interface ArrastreList {
  date: string;
  items: ArrastreResponse[];
}

export interface TransportRequestFilter {
  page?: number;
  limit?: number;
  date?: string;
  groupCode?: string;
  scheduleType?: ScheduleType;
}

export interface TransportRequestList {
  items: TransportRequestResponse[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ById {
  id: string;
}

export interface UpdateTransportRequest extends UpdateTransportRequestDto {
  id: string;
}
// ==========================
// Service interface (cliente gRPC)
// ==========================

export interface TransportRequestServiceClient {
  create(data: CreateTransportRequestDto): Observable<TransportRequestResponse>;
  findAll(data: TransportRequestFilter): Observable<TransportRequestList>;
  findOne(data: ById): Observable<TransportRequestResponse>;
  update(data: UpdateTransportRequest): Observable<TransportRequestResponse>;
  remove(data: ById): Observable<TransportRequestResponse>;
  getArrastres(data: ArrastreFilter): Observable<ArrastreList>;
}
