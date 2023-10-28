
import { ADDBOOKS, DELETE, FEATURED, SEARCH, UPDATE, UPDATEDATA } from "./actionTypes"


export const addbooks = (books) =>{
    return{
        type: ADDBOOKS,
        payload: books
    }
}
export const filterFeaturedBooks = (filter) =>{
    return{
        type: FEATURED,
        payload: filter
    }
}
export const updateBooks = (bookData) =>{
    return{
        type: UPDATE,
        payload: {
            bookData
        }
    }
}


export const deleteBook = (bookId) =>{
    return{
        type: DELETE,
        payload: bookId 
    }
}

