import { addToCart, removeCart,emptyCart } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { productList } from '../../redux/productAction';
import {useSelector} from 'react-redux';


function Main() {
  const dispatch = useDispatch();//use dispatch is a hook
  const data = useSelector((state)=>state.productData);
  console.warn("data in main component",data);
  const product = {
    name:'iphone',
    type:'mobile',
    price:10000,
    color:'red'
  }
  return (
    <div className="App">

       <button onClick={()=> dispatch(addToCart(product))}>Add to Cart</button> <br></br><br></br>
       <button onClick={()=> dispatch(removeCart(product.name))}>Remove from Cart</button><br></br><br></br>
       <button onClick={()=> dispatch(emptyCart())}>Empty Cart</button>
       <button onClick={()=> dispatch(productList())}>GET PRODUCT LIST</button>
    </div>
  );
}

export default Main;
