
'use client'

import { getProductData } from "@/app/redux/addProduct/addProduct";
import { addbooks, updateBooks } from "@/app/redux/products/actions";
import { useDispatch, useSelector } from "react-redux";
const IdGenerator = (books)=>{
   const bookId= books.reduce((bookId, book)=>{
         return Math.max(parseFloat(bookId),parseFloat(book.id))
    },0)
    return parseFloat(bookId) + 1
}
const AddProduct = ()=>{

    const bookState = useSelector(state=>state.bookForm)
    const {books} = useSelector(state=>state.books)

    const dispatch = useDispatch()

    // console.log(IdGenerator(books));
        
    // if (bookState[0]) {
    //     setInput({
    //         id: bookState[0].id,
    //         name: bookState[0].name,
    //         author: bookState[0].author,
    //         image: bookState[0].image,
    //         rating: bookState[0].rating, 
    //         price: bookState[0].price,
    //         featured: bookState[0].featured,
    //     })
        
    // }
  const formHandler= (book)=>{
    dispatch(getProductData(book))
  }
  const bookUpdateHandler=(e)=>{
        e.preventDefault()
        dispatch(updateBooks(bookState))
        dispatch(getProductData({
            "id": "",
            "name": "",
            "author": "",
            "image": "",
            "rating": "",
            "price": "",
            "featured": ""
          }))
        
  }
  const addBookHandler=(e)=>{
    e.preventDefault();
    dispatch(addbooks({...bookState, id: IdGenerator(books)}))
    dispatch(getProductData({
        "id": "",
        "name": "",
        "author": "",
        "image": "",
        "rating": "",
        "price": "",
        "featured": ""
      }))
    
}
return(
      
    <div>
            <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
            <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
            <form className="book-form">
                <div className="space-y-2">
                <label for="name">Book Name</label>
                <input onChange={(e)=>formHandler({...bookState, name: e.target.value})} value={bookState.name} required className="text-input" type="text" id="input-Bookname" name="name" />
                </div>

                <div className="space-y-2">
                <label for="category">Author</label>
                <input onChange={(e)=>formHandler({...bookState, author: e.target.value})} value={bookState.author} required className="text-input" type="text" id="input-Bookauthor" name="author" />
                </div>

                <div className="space-y-2">
                <label for="image">Image Url</label>
                <input onChange={(e)=>formHandler({...bookState, image: e.target.value})} value={bookState.image} required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" />
                </div>

                <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                    <label for="price">Price</label>
                    <input onChange={(e)=>formHandler({...bookState, price: e.target.value})} value={bookState.price} required className="text-input" type="number" id="input-Bookprice" name="price" />
                </div>

                <div className="space-y-2">
                    <label for="quantity">Rating</label>
                    <input onChange={(e)=>formHandler({...bookState, rating: e.target.value})} value={bookState.rating} required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
                </div>
                </div>

                <div className="flex items-center">
                <input onChange={(e)=>formHandler({...bookState, featured: !bookState.featured})} checked={bookState.featured}  id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" />
                <label for="featured" className="ml-2 text-sm"> This is a featured book </label>
                </div>
                {bookState.id !=="" ?
                <button onClick={(e)=>bookUpdateHandler(e)} type="submit" className="submit" id="submit">Update Book</button>:
                <button onClick={(e)=>addBookHandler(e)} type="submit" className="submit" id="submit">Add Book</button>}
                
            </form>
            </div>
    </div>
    )
}
export default AddProduct;
