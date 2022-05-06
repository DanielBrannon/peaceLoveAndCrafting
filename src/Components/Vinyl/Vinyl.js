import React from 'react';
import './Vinyl.css';
import Product from '../Product/Product';
import autismElephant from './Assets/autismElephant.png';
import bigHeartLittleMinds from './Assets/bigHeartLittleMinds.png';
import ButterfliesAndAngels from './Assets/ButterfliesAndAngels.png';
import butterflyHeart from './Assets/butterflyHeart.png';
import butterflyHeartReveresed from './Assets/butterflyHeartReveresed.png';
import changeTheWorld from './Assets/changeTheWorld.png';
import christian from './Assets/christian.png';
import drinkBeer from './Assets/drinkBeer.png';
import emptyTomb from './Assets/emptyTomb.png';
import flushAgain from './Assets/flushAgain.png';
import gamer from './Assets/gamer.png';
import gotYourNose from './Assets/GotYourNose.png';
import gradingFrustration from './Assets/gradingFrustration.png';
import heartTree from './Assets/heartTree.png';
import hookedOnDaddy from './Assets/hookedOnDaddy.png';
import jesusHeart from './Assets/jesusHeart.png';
import loveToRead from './Assets/loveToRead.png';
import mamaBear from './Assets/mamaBear.png';
import mater from './Assets/materBody.png';
import motivation from './Assets/motivation.png';
import perfectlyForgiven from './Assets/perfectlyForgiven.png';
import pleaseRemainSeated from './Assets/pleaseRemainSeated.png';
import poopHereAgain from './Assets/poopHereAgain.png';
import proverbs from './Assets/proverbs.png';
import rosePuppy from './Assets/rosePuppy.png';
import singingSoul from './Assets/singingSoul.png';
import dobbyLovesSocks from './Assets/sockLove.png';
import sprinkleTinkle from './Assets/sprinkleTinkle.png';
import tabOverload from './Assets/tabOverload.png';
import tinkerBellBelieve from './Assets/tinkerbellBelieve.png';
import tinkerbell from './Assets/tinkerbell.png';
import unicorn from './Assets/unicorn.png';
import unicornHeart from './Assets/unicornHeart.png';

function Vinyl() {
  return (
    <div>
      <h2>Vinyl</h2>
        <div className="productDiv">
          <Product name='Autism Elephant' image={autismElephant} price1={5} price2={10} price={0}/>
          <Product name='Big Hearts, Little Minds' image={bigHeartLittleMinds} price1={5} price2={10} price={0}/>
          <Product name='Butterflies and Angels' image={ButterfliesAndAngels} price1={5} price2={10} price={0}/>
          <Product name='Butterfly Heart' image={butterflyHeart} price1={5} price2={10} price={0}/>
          <Product name='Reversed Butterfly Heart' image={butterflyHeartReveresed} price1={5} price2={10} price={0}/>
          <Product name='Teachers Change the World' image={changeTheWorld} price1={5} price2={10} price={0}/>
          <Product name='Jesus saves' image={christian} price1={5} price2={10} price={0}/>
          <Product name='Bubba J' image={drinkBeer} price1={5} price2={10} price={0}/>
          <Product name='The Tomb was Empty' image={emptyTomb} price1={5} price2={10} price={0}/>
          <Product name='Flush Again' image={flushAgain} price1={5} price2={10} price={0}/>
          <Product name="I'd Rather be gaming" image={gamer} price1={5} price2={10} price={0}/>
          <Product name='Got Your Nose' image={gotYourNose} price1={5} price2={10} price={0}/>
          <Product name="Grading is hard" image={gradingFrustration} price1={5} price2={10} price={0}/>
          <Product name='Heart Tree' image={heartTree} price1={5} price2={10} price={0}/>
          <Product name='Hooked on Daddy' image={hookedOnDaddy} price1={5} price2={10} price={0}/>
          <Product name='Jesus Heart' image={jesusHeart} price1={5} price2={10} price={0}/>
          <Product name='Reading Love' image={loveToRead} price1={5} price2={10} price={0}/>
          <Product name='Mama Bear' image={mamaBear} price1={5} price2={10} price={0}/>
          <Product name='Mater Body' image={mater} price1={5} price2={10} price={0}/>
          <Product name='How to Succeed' image={motivation} price1={5} price2={10} price={0}/>
          <Product name='Perfectly Forgiven' image={perfectlyForgiven} price1={5} price2={10} price={0}/>
          <Product name='Remain Seated' image={pleaseRemainSeated} price1={5} price2={10} price={0}/>
          <Product name='Poop Here Again' image={poopHereAgain} price1={5} price2={10} price={0}/>
          <Product name='Proverbs' image={proverbs} price1={5} price2={10} price={0}/>
          <Product name='Rose Puppy' image={rosePuppy} price1={5} price2={10} price={0}/>
          <Product name='Singing Soul' image={singingSoul} price1={5} price2={10} price={0}/>
          <Product name='Dobby Loves Socks' image={dobbyLovesSocks} price1={5} price2={10} price={0}/>
          <Product name='Sprinkle Tinkle' image={sprinkleTinkle} price1={5} price2={10} price={0}/>
          <Product name='Tab Overload' image={tabOverload} price1={5} price2={10} price={0}/>
          <Product name='Believe' image={tinkerBellBelieve} price1={5} price2={10} price={0}/>
          <Product name='Tinkerbell' image={tinkerbell} price1={5} price2={10} price={0}/>
          <Product name='Unicorn' image={unicorn} price1={5} price2={10} price={0}/>
          <Product name='Unicorn Heart' image={unicornHeart} price1={5} price2={10} price={0}/>
        </div>
    </div>
  )
}

export default Vinyl