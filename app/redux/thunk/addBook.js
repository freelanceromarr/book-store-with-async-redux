import { addbooks } from "../products/actions";


export const addBookThunk = (book)=> async (dispatch) =>{
    const response = await fetch('http://localhost:3000/api/books',{
        method: 'POST',
        body: JSON.stringify({name: book.name, author: book.author, image: book.image, price: book.price, rating: book.rating, featured: book.featured}),
        headers: {'Content-Type': 'application/json'},
    });
    const books = await response.json();
    dispatch(addbooks(books)); 
}