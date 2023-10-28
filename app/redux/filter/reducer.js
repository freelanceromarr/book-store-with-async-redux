const { FEATURED, ALL, SEARCH } = require("./actionTypes");

const initialState = {
    status: "all",
    search:""
}

const filterReducer = (state = initialState ,action)=>{
    switch (action.type) {
        case FEATURED:
            return {
                ...state,
                status: action.payload
            }
        case SEARCH:
            return {
                ...state,
                search: action.payload
                }       
    
        default:
            return state
    }
}

export default filterReducer;