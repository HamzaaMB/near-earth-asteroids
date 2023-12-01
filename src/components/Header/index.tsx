import React from "react";
import './index.css'
// @ts-ignore
import  asteroid_banner  from '../../assets/asteroid_banner.png';

const Header = ({title}: any) =>  {

  return (
  <header className='header_container'>
    <h1>Asteroids</h1>
    <img src={asteroid_banner} alt={'Asteroid in space'}/>
  </header>
)
}

export default Header