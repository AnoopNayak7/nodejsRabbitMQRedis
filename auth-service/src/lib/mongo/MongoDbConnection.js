import mongoose from 'mongoose';
import Logger from '../logger/logger.js'

mongoose.set('strictQuery', false);

// Create mongoDB connection
export const MongoDBConnection = (dbConfig) => {
    const URI = `${process.env.MONGO_URL}${dbConfig.db}`
    try {
        mongoose.connect(URI, dbConfig.options)
        Logger.debug('Connection to database successfull')
        return mongoose.connection.readyState
    } catch (err) {
        Logger.warn('server.js::CONNECTION ON MONGO FAILED WITH ERR',err)
        process.exit(1)
    }
}