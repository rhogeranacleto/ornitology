import { connectDB } from './src/db';
import { createServer } from './src/server';

createServer();
connectDB();