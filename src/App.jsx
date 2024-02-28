import './App.css'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Shop from './page/Shop';
import Services from './page/Services';
import Contact from './page/Contact';
import { useState } from 'react';
import Fake from './components/fake/Fake';
import FakeDetails from './components/fake/FakeDetails';
import Cart from './components/cart/Cart';
import Swal from "sweetalert2";




const App = () => {
 const [dark , setDark] = useState(false);
 let [cartItems , setCartItems] = useState([]);
 function isDark(){
  setDark(!dark);
 }

 function addToCart(product){
  let selectedProduct = cartItems.find(item => item.id == product.id);

  if(selectedProduct){
     setCartItems(cartItems.map(item => item.id ==product.id ?
      {...selectedProduct , qty : selectedProduct.qty + 1}: item
      )) 
  }else{
    setCartItems([...cartItems , {...product , qty : 1}]);
    Swal.fire({
      title: "This product Added To Cart Successfully",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  
  }
 }
 function removeProduct(product){
  setCartItems(cartItems.filter(item => item.id != product.id))
  Swal.fire({
    title: "This product Removed To Cart Successfully",
    icon: "success",
    timer: 1500,
    showConfirmButton: false,
  });
  
 }
 
 function decrease(product){
  let selectedProduct = cartItems.find(item => item.id == product.id);

  if(selectedProduct.qty == 1){
    setCartItems(cartItems.filter(item => item.id != product.id))
    Swal.fire({
      title: "This product Removed To Cart Successfully",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  

  }else{
    setCartItems(cartItems.map(item => item.id == product.id ?
      {...selectedProduct , qty : selectedProduct.qty - 1} : item
      ))
  }

 }

  return (
    <div className={ dark ? 'app-dark' : "app" }>
    <BrowserRouter>
    <Navbar isDark = {isDark} dark = {dark} cartItems = {cartItems}/>
    <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/about' element = {<About/>}/>
    <Route path='/shop' element = {<Shop addToCart = {addToCart}/>}/>
    <Route path='/services' element = {<Services/>}/>
    <Route path='/contact' element = {<Contact/>}/>
    <Route path='/fakeDetais/:id' element = {<FakeDetails/>}/>
    <Route path='/cart' element = {<Cart decrease = {decrease} addToCart = {addToCart} cartItems = {cartItems} removeProduct = {removeProduct}/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
