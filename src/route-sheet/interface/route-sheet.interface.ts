// para usar en route-sheet.service.ts

import { Observable } from 'rxjs';
import { ById } from 'src/common';

export interface RouteSheetResponse {
  id: string;
  date: string; // 👈 string, como pide el proto (viene de Date)
  kmStart: number;
  kmEnd?: number;
  startTime: string; // 👈 string
  endTime?: string; // 👈 string, opcional (viaje aún no termina)
  driverId: string;
  vehicleId: string;
  copilotId?: string;
  requestId: string;
}

// ==========================
// DTOs de entrada
// ==========================

export interface CreateRouteSheetDto {
  date: string;
  kmStart: number;
  startTime: string;
  driverId: string;
  vehicleId: string;
  copilotId?: string;
  requestId: string;
  // kmEnd y endTime NO van en el create: se completan al finalizar el viaje (ver UpdateRouteSheetDto)
}

export interface UpdateRouteSheetDto {
  id: string;
  date?: string;
  kmStart?: number;
  kmEnd?: number;
  startTime?: string;
  endTime?: string;
  // driverId?: string;
  // vehicleId?: string;
  copilotId?: string;
  requestId?: string;
}

export interface ReassignRouteSheetDto {
  id: string;
  driverId?: string;
  vehicleId?: string;
}

// ==========================
// Filtro
// ==========================

export interface RouteSheetFilter {
  page?: number;
  limit?: number;
  date?: string;
  driverId?: string;
  vehicleId?: string;
  requestId?: string;
}

// ==========================
// Lista (para el Controller, con Response)
// ==========================

export interface RouteSheetList {
  items: RouteSheetResponse[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface RouteSheetServiceClient {
  create(data: CreateRouteSheetDto): Observable<RouteSheetResponse>;
  findAll(data: RouteSheetFilter): Observable<RouteSheetList>;
  findOne(data: ById): Observable<RouteSheetResponse>;
  update(data: UpdateRouteSheetDto): Observable<RouteSheetResponse>;
  remove(data: ById): Observable<RouteSheetResponse>;
  reassign(data: ReassignRouteSheetDto): Observable<RouteSheetResponse>;
}
