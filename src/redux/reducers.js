import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./constants";

// export const cartData = (data=[],action) => {
//         if(action.type===ADD_TO_CART){
//             console.warn("reducer called", action);
//             return action.data
//         }else{
//             return "no action matched"
//         }

// }

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART condition", action);
      return [action.data, ...data];

    case REMOVE_TO_CART:
      console.warn("REMOVE Condition", action);
      data.length = data.length - 1;
      return [...data];

    case EMPTY_CART:
      data.length = 0;
      return [...data];

    default:
      return data;
  }
};
