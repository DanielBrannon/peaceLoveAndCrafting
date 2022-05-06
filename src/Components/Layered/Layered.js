import React from 'react';
import './Layered.css';
import Product from '../Product/Product';
import Mandala from './Assets/3DMandala.png';
import yingYang from './Assets/yingYang.png';
import butterfly from './Assets/Butterfly.png';
import hexagonMandala from './Assets/HexagonalMandala.png';
import flowerMandala from './Assets/flowerMandala.png';
import wheelMandala from './Assets/wheelMandala.png';
import burstingMandala from './Assets/burstingMandala.png';
import dragonfly from './Assets/dragonfly.png';
import springButterfly from './Assets/springButterfly.png';
import goodLuckButtefly from './Assets/goodLuckButtefly.png';
import labrynth from './Assets/labrynth.png';
import starsAndStripes from './Assets/americanMandala.png';
import wildMandala from './Assets/wildMandala.png';
import easterEggMandala from './Assets/easterEggMandala.png';
import easterEggJr from './Assets/easterEggJr.png';
import babyEasterEgg from './Assets/babyEasterEgg.png';
import lilyMandala from './Assets/lilyMandala.png';
import psychadelicMandala from './Assets/psychadelicMandala.png';

function Layered() {
  return (
    <div>
      <h2>Layered</h2>
      <div className="productDiv">
          <Product name='3D Mandala' image={Mandala} price1={15} price2={20} price={0}/>
          <Product name='Ying Yang Mandala' image={yingYang} price1={10} price2={15} price={0}/>
          <Product name='3D Butterfly' image={butterfly} price1={10} price2={15} price={0}/>
          <Product name='3D Hexagonal Mandala' image={hexagonMandala} price1={10} price2={15} price={0}/>
          <Product name='3D Flower Mandala' image={flowerMandala} price1={10} price2={15} price={0}/>
          <Product name='Mandala Wheel' image={wheelMandala} price1={10} price2={15} price={0}/>
          <Product name='Bursting Mandala' image={burstingMandala} price1={10} price2={15} price={0}/>
          <Product name='3D Dragonfly' image={dragonfly} price1={10} price2={15} price={0}/>
          <Product name='The Spring Buttefly' image={springButterfly} price1={10} price2={15} price={0}/>
          <Product name='Good Luck Buttefly' image={goodLuckButtefly} price1={10} price2={15} price={0}/>
          <Product name='The Labrynth Mandala'image={labrynth} price1={15} price2={20} price={0}/>
          <Product name='Stars and Stripes Mandala' image={starsAndStripes} price1={15} price2={20} price={0}/>
          <Product name='The Wild Mandala' image={wildMandala} price1={10} price2={15} price={0}/>
          <Product name='3D Easter Egg Mandala' image={easterEggMandala} price1={10} price2={15} price={0}/>
          <Product name='Easter Egg Jr' image={easterEggJr} price1={10} price2={15} price={0}/>
          <Product name='Baby Easter Egg' image={babyEasterEgg} price1={10} price2={15} price={0}/>
          <Product name='3D Lily Mandala' image={lilyMandala} price1={10} price2={15} price={0}/>
          <Product name='The Kaleidoscope Mandala' image={psychadelicMandala} price1={10} price2={15} price={0}/>
        </div>
    </div>
    
  )
}

export default Layered