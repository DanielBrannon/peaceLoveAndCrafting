import React from 'react'
import './Home.css';
import Religious from '../Religious/Religious';
import Cards from '../Cards/Cards';
import Vinyl from '../Vinyl/Vinyl';
import Layered from '../Layered/Layered';
import BirdToys from '../BirdToys/BirdToys';
import Header from '../Header/Header';

function Home() {
  return (
    <div className='Home'>
      <div className="HomeContainer">
        <div className="homeRow">
          <Religious />
        </div>
        <div className="homeRow">
          <Cards />
        </div>
        <div className="homeRow">
          <Vinyl />
        </div>
        <div className="homeRow">
          <Layered />
        </div>
        <div className="homeRow">
          <BirdToys />
        </div>
      </div>
    </div>
  )
}

export default Home