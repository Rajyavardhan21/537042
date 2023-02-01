import {  SET_PRODUCT_LIST } from "./constants";

export const productData = (data = [], action) => {
    switch (action.type) {
    //   case PRODUCT_LIST:
    //     console.warn("prodcut list  condition", action);
    //     return [action.data];
     case SET_PRODUCT_LIST:
     console.warn("prodcut list  condition", action);
     return [action.data];
      default:
        return data;
    }
  };