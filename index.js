import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import router from './routes/routes.js';


dotenv.config();

const mongoStr = process.env.DATABASE_URL;
mongoose.connect(mongoStr);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
})

database.on('connected', () => {
  console.log('Database connected');
})

const PORT = 3000

const app = express();
app.use(express.json());

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Starting server at port ${ PORT }`);
})