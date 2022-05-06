import React, {useEffect, useState} from 'react';
import './Religious.css';
import Product from '../Product/Product';
import Crucifixion from './Assets/Screenshot 2022-04-22 141216.png';
import Cross from './Assets/Screenshot 2022-04-22 143340.png';
import {useStateValue} from '../../StateProvider';

function Religious() {
  const [{basket}, dispatch] = useStateValue();
  const [state, setState] = useState(15);
  return (
    <div>
      <h2>Religious</h2>
        <div className="productDiv">
          <Product name="The Crucifixion" id={1} image={Crucifixion} price1={15} price2={20} price={basket.price}/>
          <Product name="The Cross" id={2} image={Cross} price1={10} price2={15} price={basket.price}/>
        </div>
    </div>
  )
}

export default Religious