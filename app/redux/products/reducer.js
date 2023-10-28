import { ADDBOOKS, DELETE, FEATURED, LOADBOOKS, SEARCH, UPDATE, UPDATEDATA } from "./actionTypes"

const initialState = {
    books: [],
    featuredBooks: []
}

const bookReducer = (state=initialState, action) =>{
    const {type, payload} = action;
    switch (type) {
        case LOADBOOKS:
            return {
                ...state,
                books: [...payload]
            }
        case ADDBOOKS:
            return {
                ...state,
                books: [...state.books, payload]
            }
        case FEATURED:
                if (action.payload === 'featured') {
                    return {
                        ...state,
                        books: state.books.filter(book => book.featured===true),
                    }
                }return state
           
        case UPDATE:
            return {
                ...state,
                books: state.books.map(book =>{
                    if (book._id === payload.bookId) {
                        return payload.bookData
                    } return book;
                })
            }
        case UPDATEDATA:
            
            return {
                ...state,
                updateBook: payload
            }
        case DELETE:
            return{
                ...state,
                books: state.books.filter(book => book._id!==payload)
            }
            
    
        default:
            return state;
    }
}

export default bookReducer;