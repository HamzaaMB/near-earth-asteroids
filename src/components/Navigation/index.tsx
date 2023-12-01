import React from 'react'
import { Link } from "react-router-dom";
import './index.css'
// @ts-ignore
import nasaLogo from '../../assets/nasaLogo.png'
const Navigation = () => {

    return (
        <nav className='navigation_container'>
         <Link to={'/'}>
            <img src={nasaLogo} alt={'Nasa logo'} />
         </Link>
        </nav>
    )
}

export default Navigation