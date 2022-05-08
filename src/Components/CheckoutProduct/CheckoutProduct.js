import React from 'react';
import { useStateValue } from '../../StateProvider';
import './checkoutProduct.css';

function CheckoutProduct({ id, image, name, price}) {
  const [ dispatch] = useStateValue();
  
  const removeFromBasket = () => {
    dispatch({
      type: 'removeFromBasket',
      item: {
        id: id,
        image: image,
        name: name,
        price: price
      }
    })
  }

  return (
    <div className='checkoutProduct'>
        <img className='checkoutProductImage' src={image} alt='Product' />
        <div className='checkoutProductInfo'>
            <p className='checkoutProductTitle'><strong>{name}</strong></p>
            <p className='price'><small>$</small><strong>{price}</strong></p>
            <button onClick={removeFromBasket}>Remove Item</button>
        </div>
    </div>
  )
}

export default CheckoutProduct