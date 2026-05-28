/* eslint-disable prettier/prettier */
import * as Joi from 'joi';
import 'dotenv/config';

interface EnvVars {
  PORT: number;
  VEHICLE_MICROSERVICE_HOST: string;
  VEHICLE_MICROSERVICE_PORT: number;
}

export const envsSchema = Joi.object({
  PORT: Joi.number().required(),
  VEHICLE_MICROSERVICE_HOST: Joi.string().required(),
  VEHICLE_MICROSERVICE_PORT: Joi.number().required(),
}).unknown(true);

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  vehicleMicroserviceHost: envVars.VEHICLE_MICROSERVICE_HOST,
  vehicleMicroservicePort: envVars.VEHICLE_MICROSERVICE_PORT,
};
