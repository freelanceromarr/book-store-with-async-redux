
import { createStore, combineReducers, applyMiddleware} from "redux";
import bookReducer from "./products/reducer";
import { addProductReducer } from "./addProduct/addProduct";
import filterReducer from "./filter/reducer";
import  ThunkMiddleware from "redux-thunk";


const store = createStore(
    combineReducers({books: bookReducer, bookForm: addProductReducer, filter: filterReducer }),
    applyMiddleware(ThunkMiddleware)
)

export default store;