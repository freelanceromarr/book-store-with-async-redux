import { updateBooks } from "../products/actions";

export const updateBookThunk = (bookId, update)=> async (dispatch) =>{
    const response = await fetch(`http://localhost:3000/api/books/${bookId}`,{
        method: 'PUT',
        body: JSON.stringify(update),
        headers: {'Content-Type': 'application/json'},
    });
    const book = await response.json();
    dispatch(updateBooks(book._id, book)); 
}