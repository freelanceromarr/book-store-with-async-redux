import { addbooks, loadBooks } from "../products/actions";

export const getBooksThunk = async (dispatch, getstate) =>{
    const response = await fetch('http://localhost:3000/api/books')
    const books = await response.json();
    dispatch(loadBooks(books))
}