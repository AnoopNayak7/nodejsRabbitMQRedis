import mongoose from 'mongoose';
import Logger from '../logger/logger.js'

mongoose.set('strictQuery', false);

// Create mongoDB connection
export const MongoDBConnection = async(dbConfig) => {
    const URI = `${process.env.MONGO_URL}`
    try {
        await mongoose.connect(URI)
        console.log('Mongodb connection successfull')
        Logger.debug('Connection to database successfull')
        return mongoose.connection;
    } catch (err) {
        console.log('Mongo Err', err)
        Logger.warn('server.js::CONNECTION ON MONGO FAILED WITH ERR',err)
        process.exit(1)
    }
}
// export const MongoDBConnection = () => {
//     console.log("=--->>");
//     mongoose.connect('mongodb://127.0.0.1:27017/testdb',(err)=>{
//         if(err){
//             console.log("err hai bhai");
//         }else{
//             console.log("Db connected");
//         }
//     })
 
// }
