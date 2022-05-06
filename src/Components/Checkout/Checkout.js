import React from 'react'
import './checkout.css';
import Subtotal from '../Subtotal/subtotal';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct.js'
import {useStateValue} from '../../StateProvider'


function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className="checkoutLeft">
            <h2 className="checkoutTitle">
                Your Cart
            </h2>
            {basket.map(item => (
              <CheckoutProduct 
              name={item.name}
              image={item.image}
              price={item.price}
              id={item.id}
              />
            ))}
        </div>
        <div className="checkoutRight">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout