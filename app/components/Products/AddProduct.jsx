
'use client'

import { getProductData } from "@/app/redux/addProduct/addProduct";
import { addBookThunk } from "@/app/redux/thunk/addBook";
import { updateBookThunk } from "@/app/redux/thunk/updatebook";
import { useDispatch, useSelector } from "react-redux";

const AddProduct = ()=>{

  const bookState = useSelector(state=>state.bookForm);
  const dispatch = useDispatch();

  // form data handling
  const formHandler= (book)=>{
    dispatch(getProductData(book))
  }

  // handler for adding book @function 
  const addBookHandler=(e, stateData)=>{
    e.preventDefault();
    dispatch(addBookThunk(stateData))
    dispatch(getProductData({
      name: "",
      author: "",
      image: "",
      rating: "",
      price: "",
      featured: false
    })) 
}

 // Handler for updating book @function
 const bookUpdateHandler=(e, stateData)=>{
    e.preventDefault()
    dispatch(updateBookThunk(stateData._id, stateData))
    dispatch(getProductData({
        _id: "",
        name: "",
        author: "",
        image: "",
        rating: "",
        price: "",
        featured: false
      }))
  
}
return(
      
    <div>
            <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
            <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
            <form className="book-form">
                <div className="space-y-2">
                <label htmlFor="name">Book Name</label>
                <input onChange={(e)=>formHandler({...bookState, name: e.target.value})} value={bookState.name} required className="text-input" type="text" id="input-Bookname" name="name" />
                </div>

                <div className="space-y-2">
                <label htmlFor="category">Author</label>
                <input onChange={(e)=>formHandler({...bookState, author: e.target.value})} value={bookState.author} required className="text-input" type="text" id="input-Bookauthor" name="author" />
                </div>

                <div className="space-y-2">
                <label htmlFor="image">Image Url</label>
                <input onChange={(e)=>formHandler({...bookState, image: e.target.value})} value={bookState.image} required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" />
                </div>

                <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                    <label htmlFor="price">Price</label>
                    <input onChange={(e)=>formHandler({...bookState, price: e.target.value})} value={bookState.price} required className="text-input" type="number" id="input-Bookprice" name="price" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="quantity">Rating</label>
                    <input onChange={(e)=>formHandler({...bookState, rating: e.target.value})} value={bookState.rating} required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
                </div>
                </div>

                <div className="flex items-center">
                <input onChange={(e)=>formHandler({...bookState, featured: !bookState.featured})} checked={bookState.featured}  id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" />
                <label htmlFor="featured" className="ml-2 text-sm"> This is a featured book </label>
                </div>
                {bookState._id?
                <button onClick={(e)=>bookUpdateHandler(e, bookState)} type="submit" className="submit" id="submit">Update Book</button>:
                <button onClick={(e)=>addBookHandler(e, bookState)} type="submit" className="submit" id="submit">Add Book</button>}
                
            </form>
            </div>
    </div>
    )
}
export default AddProduct;
