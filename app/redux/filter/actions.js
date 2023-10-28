const { FEATURED, ALL, SEARCH } = require("./actionTypes")

export const filterByStatus = (status) =>{
    return {
        type: FEATURED,
        payload: status
    }
}

export const allStatus = (status) =>{
    return {
        type: ALL,
        payload: status
    }
}

export const searchFilter = (search) =>{
    return{
        type: SEARCH,
        payload: search
    }
}