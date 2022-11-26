import React from 'react'
import './header.css'
import Cta from './Cta' 
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
    return (
        <header id="header">
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Juan David Quimbayo Núñez</h1>
                <h5 className="text-light">Full Stack Developer</h5>
                <Cta/> 
                <HeaderSocial/>

                <div className="Logo">
                    <img src={ME}  alt="Juan David Quimbayo Núñez" />
                </div>
                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header
