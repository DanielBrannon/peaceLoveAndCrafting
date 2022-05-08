import React, { useState, useEffect } from 'react';
import './Product.css';
import {useStateValue} from '../../StateProvider'

function Product({ name, image, price1, price2, price, id }) {
  const [ dispatch] = useStateValue();
  const [state, setState] = useState({selectedOption: 'price1', price: price1})
  
  useEffect(() => {

  }, [state])

  const addToBasket = () => {
  
    dispatch({
      type: 'addToBasket',
      item: {
        name: name,
        image: image,
        price1: price1,
        price2: price2,
        price: state.price,
        id: id
      },
      state: {
        selectedOption: state.selectedOption,
        price: state.price
      }
    })
  }
  return (
    <div className='product'>
      <img src={image} alt="" />
      <div className='productInfo'>
        <p className='productName'><strong>{name}</strong></p>
        <form className='productSize' onSubmit={() => addToBasket}>
          <span className='small'>
        <label>
        <input
              className='price1'
              type="radio"
              value={'price1'}
              name="price"
              checked={state.selectedOption === 'price1'}
              onChange={(event) => {setState({selectedOption: event.target.value, price: price1})}}
            /> <strong>Small</strong>: <span className='price'> <small>$</small>{price1} </span>
        </label>
          </span>
          <span className='large'>
        <label>
        <input
              className='price2'
              type="radio"
              value={'price2'}
              name="price"
              checked={state.selectedOption === 'price2'}
              onChange={(event) => {setState({selectedOption: event.target.value, price: price2})}}
            /> <strong>Large</strong>: <span className='price'> <small>$</small>{price2} </span>
        </label>
          </span>
        </form>
      </div>
      <button type="submit" onClick={addToBasket}>Add to basket</button>
    </div>
  )

}
export default Product