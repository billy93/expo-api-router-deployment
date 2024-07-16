import { join } from 'node:path';
import { createRequestHandler } from '@expo/server/adapter/vercel.js';

export default createRequestHandler({
  build: join(import.meta.dirname, '../dist/server'),
  // mode: process.env.NODE_ENV,
});
