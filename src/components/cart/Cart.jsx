import './cart.css';

const Cart = ({cartItems , removeProduct , addToCart , decrease}) => {
    let total = 0;
  return (
    <>
    {cartItems.length == 0 ? 
    <h2 className='no-product container'>No There Any Product In The Cart</h2>
    :
    <div className='cart container'>
    <div className='cart-products'>
   {cartItems.map(function(item){
      total = total + item.price * item.qty
      return(
          <div className='cart-product'>
              <img src={item.image} alt="" />
              <div className='counter'>
                <button onClick={() => addToCart(item)}>+</button>
                <p>{item.qty}</p>
                <button onClick={() => decrease(item)}>-</button>
              </div>
              <h3>Price : ${item.price * item.qty}</h3>
              <button onClick={() => removeProduct(item)}>Remove Product</button>
          </div>
      )
   })}
    </div>
    <div className='total'>
    <h2>Total</h2>
    <h2>${total}</h2>
    </div>
  </div>
}
   
    </>
  )
}

export default Cart
