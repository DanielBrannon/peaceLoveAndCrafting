import React from 'react';
import './Cards.css';
import Product from '../Product/Product';

function Cards() {
  return (
    <div>
      <h2>Cards</h2>
        <div className="productDiv">
          <Product price1={5} price2={10} price={5}/>
          <Product price1={5} price2={10} price={5}/>
        </div>
    </div>
  )
}

export default Cards