
import { PRODUCT_LIST } from "./constants";

// export const productList = async () => {
//    let data = fetch("https://jsonplaceholder.typicode.com/todos/1");
//    data = await (await data).json();


//     console.warn("action called",data);
//     return {
//         type:PRODUCT_LIST,
//         data
//     }
// }


export const productList = () => {
    // let data = fetch("https://jsonplaceholder.typicode.com/todos/1");
    // data = await (await data).json();
 
 
    //  console.warn("action called",data);
     return {
         type:PRODUCT_LIST,
         
     }
 }


// export const setProductList = (data) => {
//     console.log("set action")
//      return {
//          type:SET_PRODUCT_LIST,
//          data
//      }
//  }
