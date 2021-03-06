import { Environment } from '@constants';

const COMMON_CONFIG = {
  NEW_LOGS_TOPIC: 'NEW_LOGS',
};

const DEVELOPMENT_CONFIG = {
  ENV: Environment.development,
  FRONT_END_URLS: [
    'http://localhost:3001',
  ],
  PORT: 4001,
};

const PRODUCTION_CONFIG = {
  ENV: Environment.production,
  FRONT_END_URLS: [
    'http://localhost:3000',
    'http://localhost:8000',
  ],
  PORT: 4000,
};

export default {
  ...COMMON_CONFIG,

  ...(process.env.NODE_ENV === Environment.production
    ? PRODUCTION_CONFIG
    : DEVELOPMENT_CONFIG
  ),
};
