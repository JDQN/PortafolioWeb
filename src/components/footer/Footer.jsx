import React from 'react'

import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'


const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>J.D.Q.N</a>
            
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/viamonte2319/" target="_blank">
                    <BsLinkedin />
                </a>
                <a href="https://github.com/JDQN" target="_blank">
                    <BsGithub />
                </a>
                <a href="https://api.whatsapp.com/send?phone=+573216615397" target="_blank">
                    <BsWhatsapp />
                </a>
            </div>

            <div className='footer__copyright'>
                <small> 
                    &copy; 2022 J.D.Q.N. All rights reserved.
                </small>
            </div>

        </footer>
    )
}

export default Footer