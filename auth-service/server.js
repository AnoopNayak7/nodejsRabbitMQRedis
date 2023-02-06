import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import globalConfig from './src/config/index.js';
import { MongoDBConnection } from './src/lib/mongo/MongoDbConnection.js';
import Logger from './src/lib/logger/logger.js'
import { encryptionHelper } from './src/lib/security/encryptionHelper.js';
import AuthRoutes from './src/routes/auth.routes.js'
const app = express();
app.use(express.json())
app.use(cors())

app.use(`/auth/v1/`, AuthRoutes)

const PORT = process.env.PORT || 7070;
const URI = process.env.MONGO_URL;

if(app.settings.env === 'development'){
    globalConfig.mongodb.db = 'auth-db-test'
}

// MongoDB connection
const dbConnectionStatus = MongoDBConnection(globalConfig.mongodb)

const encryptedText = encryptionHelper.encrypt('AnoopNayak')
const decryptedText = encryptionHelper.decrypt(encryptedText)
app.listen(PORT, () => {
    console.log('Server running on port -->', PORT)
})
