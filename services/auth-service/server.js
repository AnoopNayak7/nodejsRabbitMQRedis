import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import globalConfig from './src/config/index.js';
import { MongoDBConnection } from '../../libs/mongo/MongoDbConnection.js';
import Logger from '../../libs/logger/logger.js'
import AuthRoutes from './src/routes/auth.routes.js'

const app = express();
app.use(express.json())
app.use(cors())
// MongoDBConnection(globalConfig.mongodb);

app.use(`/auth/v1/`, AuthRoutes);

app.get('/health', (req, res)=> {
    return res.send('Healthy Server');
});

const PORT = process.env.PORT || 7070;
const URI = process.env.MONGO_URL;

export default app;