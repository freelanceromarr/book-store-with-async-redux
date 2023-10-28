

const initialState={ 
    name: "",
    author:  "",
    image:  "",
    rating: "", 
    price:  "",
    featured: false
}
// action
export const getProductData= (product)=>{
    return {
        type: 'productData',
        payload: product
    }
}

export const addProductReducer = (state= initialState, action) =>{
    switch (action.type) {
        case "productData":
            return {
                ...state,
                ...action.payload,
            }
            
        default:
            return state;
    }
}