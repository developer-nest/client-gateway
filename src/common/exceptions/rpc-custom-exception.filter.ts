/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import {
  Catch,
  ArgumentsHost,
  ExceptionFilter,
  HttpStatus,
  HttpException,
} from '@nestjs/common';

//import { RpcException } from '@nestjs/microservices';
import { Response } from 'express';

// interface ICustomRpcError {
//   statusCode: number;
//   message: string;
// }

@Catch()
export class RpcCustomExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof HttpException) {
      return response
        .status(exception.getStatus())
        .json(exception.getResponse());
    }

    // 1. Verificamos si es un error de gRPC (tiene código y detalles)
    if (exception.code !== undefined && exception.details) {
      // Mapeo de códigos gRPC a estados HTTP
      const status = this.mapGrpcStatusToHttpStatus(exception.code);

      return response.status(status).json({
        statusCode: status,
        message: exception.details, // Aquí está el texto del error
        error: 'gRPC Error',
      });
    }

    // 2. Si no es gRPC, seguimos con el comportamiento normal de NestJS
    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
    });
  }

  // Traductor de códigos gRPC a HTTP
  private mapGrpcStatusToHttpStatus(grpcCode: number): number {
    console.log('Código gRPC recibido:', grpcCode);
    switch (grpcCode) {
      case 0:
        return HttpStatus.OK; // OK
      case 1:
        return HttpStatus.GONE; // CANCELLED
      case 3:
        return HttpStatus.BAD_REQUEST; // INVALID_ARGUMENT
      case 4:
        return HttpStatus.GATEWAY_TIMEOUT; // DEADLINE_EXCEEDED
      case 5:
        return HttpStatus.NOT_FOUND; // NOT_FOUND
      case 6:
        return HttpStatus.CONFLICT; // ALREADY_EXISTS
      case 7:
        return HttpStatus.FORBIDDEN; // PERMISSION_DENIED
      case 9:
        return HttpStatus.BAD_REQUEST; // FAILED_PRECONDITION
      case 10:
        return HttpStatus.CONFLICT; // ABORTED
      case 16:
        return HttpStatus.UNAUTHORIZED; // UNAUTHENTICATED
      default:
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }
  }
}

// @Catch(RpcException)
// export class RpcCustomExceptionFilter implements ExceptionFilter {
//   catch(exception: RpcException, host: ArgumentsHost) {
//     const ctx = host.switchToHttp();
//     const response = ctx.getResponse<Response>();

//     const rpcError = exception.getError();

//     if (
//       typeof rpcError === 'object' &&
//       rpcError !== null &&
//       'statusCode' in rpcError &&
//       'message' in rpcError
//     ) {
//       const error = rpcError as ICustomRpcError;
//       const status = isNaN(+error.statusCode)
//         ? HttpStatus.BAD_REQUEST
//         : +error.statusCode;
//       return response.status(status).json(error);
//     }

//     response.status(HttpStatus.BAD_REQUEST).json({
//       statusCode: HttpStatus.BAD_REQUEST,
//       message: rpcError,
//     });
//   }
// }
