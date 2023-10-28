
import mongoose from 'mongoose';

export const connect = async ()=>{
    await mongoose.connect(process.env.DB_HOST)
}


connect()