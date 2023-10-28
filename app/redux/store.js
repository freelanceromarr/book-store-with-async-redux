
import { createStore, combineReducers } from "redux";
import bookReducer from "./products/reducer";
import { addProductReducer } from "./addProduct/addProduct";
import filterReducer from "./filter/reducer";


const store = createStore(combineReducers({books: bookReducer, bookForm: addProductReducer, filter: filterReducer }))

export default store;