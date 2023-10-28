import { ADDBOOKS, DELETE, FEATURED, SEARCH, UPDATE, UPDATEDATA } from "./actionTypes"

const initialState = {
    books: [{
        id:1,
        name: "Life Hurts: A Doctor's Personal Journey Through Anorexia ",
        author: "Dr Elizabeth McNaught",
        image: "https://m.media-amazon.com/images/P/B07DZ86WP7.01._SCLZZZZZZZ_SX500_.jpg",
        rating:3, 
        price: 14,
        featured: false
    },
    ],
    featuredBooks: []
}

const bookReducer = (state=initialState, action) =>{
    const {type, payload} = action;
    switch (type) {
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
                    if (book.id == payload.bookData.id) {
                        return {...payload.bookData}
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
                books: state.books.filter(book => book.id!==payload)
            }
            
    
        default:
            return state;
    }
}

export default bookReducer;