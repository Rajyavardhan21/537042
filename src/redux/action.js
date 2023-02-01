import { ADD_TO_CART } from "./constants";
import { REMOVE_TO_CART,EMPTY_CART } from "./constants";
// import { EmptyObject } from "redux";


export const addToCart = (data) => {
    console.warn("action called",data);
    return {
        type:ADD_TO_CART,
        data
    }
}

export const removeCart = (data) => {
    return {
        type:REMOVE_TO_CART,
        data
    }
}

export const emptyCart = (data) => {
    return {
        type:EMPTY_CART,
        data
    }
}