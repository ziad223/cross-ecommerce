import React from 'react'
import Fake from '../components/fake/Fake'

const Shop = ({addToCart}) => {

  return (
    <div>
      <Fake addToCart = {addToCart}/>
    </div>
  )
}

export default Shop
