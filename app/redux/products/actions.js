
import { ADDBOOKS, DELETE, FEATURED, LOADBOOKS, SEARCH, UPDATE, UPDATEDATA } from "./actionTypes"


export const loadBooks = (books) =>{
    return{
        type: LOADBOOKS,
        payload: books
    }
}
export const addbooks = (book) =>{
    return{
        type: ADDBOOKS,
        payload: book
    }
}
export const filterFeaturedBooks = (filter) =>{
    return{
        type: FEATURED,
        payload: filter
    }
}
export const updateBooks = (bookId, bookData) =>{
    return{
        type: UPDATE,
        payload: {
            bookId,
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

