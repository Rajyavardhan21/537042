import {takeEvery,put} from 'redux-saga/effects';
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constants';

function* getProducts(){

    let data = yield fetch("http://localhost:3001/product");
    data =  (data).json();
 
    console.warn("call api here",data);

    yield put({type:SET_PRODUCT_LIST,data})
    
}

function* productSaga(){
    yield takeEvery(PRODUCT_LIST, getProducts);

}

export default productSaga;