import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import mongoose from 'mongoose';

import globalConfig from './config/index.js';
import { MongoDBConnection } from './libs/mongo/MongoDbConnection.js';
import Logger from './libs/logger/logger.js'
import authApp from './services/auth-service/server.js'

const app = express();
app.use(express.json())


// if (app.settings.env === 'development') {
//     globalConfig.mongodb.db = 'auth-db-test'
// }

// MongoDB connection
MongoDBConnection()

authApp.listen(7070, ()=> console.log('Server Running Bro'))