import { deleteBook } from "../products/actions";

export const deleteBookThunk = (bookId)=> async (dispatch) =>{
    await fetch(`http://localhost:3000/api/books/${bookId}`,{
        method: 'DELETE'
    });

    dispatch(deleteBook(bookId)); 
}