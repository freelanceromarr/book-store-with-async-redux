
import mongoose from 'mongoose';

export const connect = async ()=>{
    await mongoose.connect("mongodb+srv://mitcomputer1996:JkQJASUho3SyrSBr@omar.inwdlbe.mongodb.net/BookStore")
}


connect()