
import {Schema} from 'mongoose';
import mongoose from 'mongoose';

const bookSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },

})

export const Books = mongoose.models.Books || mongoose.model('Books', bookSchema);