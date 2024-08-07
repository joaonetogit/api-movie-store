/* eslint-disable no-console */
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/index';

const app = express();
dotenv.config();

const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());

app.use('/api', router);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB Atlas: ', error);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
