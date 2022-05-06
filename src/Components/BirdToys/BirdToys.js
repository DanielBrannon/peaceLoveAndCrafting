import React from 'react';
import './BirdToys.css';
import Product from '../Product/Product';

function BirdToys() {
  return (
    <div>
      <h2>BirdToys</h2>
        <div className="productDiv">
          <Product price1={5} price2={10} price={5}/>
          <Product price1={5} price2={10} price={5}/>
        </div>
    </div>
  )
}

export default BirdToys