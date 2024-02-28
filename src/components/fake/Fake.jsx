import { useEffect, useState } from 'react';
import './fake.css'
import { Link } from 'react-router-dom';

const Fake = ({addToCart}) => {
    let [products , setProducts] = useState([]);

    useEffect(() =>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data =>{
            setProducts(data);
        })
    } , [])
  
  return (
    <div className='products container'>
     {products.map(function(product){
        return(
            <div className='product'>
              <Link to={`/fakeDetais/${product.id}`}>
              <img src={product.image} alt="" />
              </Link>  
                <h2>{product.title.slice(0 , 15)}</h2>
                <button onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
        )
     })}
    </div>
  )
}

export default Fake
