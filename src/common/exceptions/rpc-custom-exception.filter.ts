/* eslint-disable prettier/prettier */
import {
  Catch,
  ArgumentsHost,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';

import { RpcException } from '@nestjs/microservices';
import { Response } from 'express';

interface ICustomRpcError {
  statusCode: number;
  message: string;
}

@Catch(RpcException)
export class RpcCustomExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const rpcError = exception.getError();

    if (
      typeof rpcError === 'object' &&
      rpcError !== null &&
      'statusCode' in rpcError &&
      'message' in rpcError
    ) {
      const error = rpcError as ICustomRpcError;
      const status = isNaN(+error.statusCode)
        ? HttpStatus.BAD_REQUEST
        : +error.statusCode;
      return response.status(status).json(error);
    }

    response.status(HttpStatus.BAD_REQUEST).json({
      statusCode: HttpStatus.BAD_REQUEST,
      message: rpcError,
    });
  }
}
