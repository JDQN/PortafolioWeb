import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

                <div className='container about__container'>
                    <div className='about__me'>
                        <div className='about__me-image'>
                            <img src={ME} alt='About Imagen me'/>
                        </div>
                    </div>

                    <div className='about__content'>
                        <div className="about__cards">

                            <article className='about__card'>
                                <FaAward className="about__icon"/>
                                <h5>Experience</h5>
                                <small>1+ Years</small>
                            </article>

                            <article className='about__card'>
                                <FiUsers className="about__icon"/>
                                <h5>Clients</h5>
                                <small>1+ Worked</small>
                            </article>
                            
                            <article className='about__card'>
                                <VscFolderLibrary className="about__icon"/>
                                <h5>Projects</h5>
                                <small>7+ Completed</small>
                            </article>
                        </div>
                        <p>
                            Desde el inicio de mi carrera como desarollador de software y en especial 
                            en el área de la tecnología web, me he convertido en una persona con metas claras,
                            y con una gran capacidad de adaptación y trabajo en equipo que me ha permitido 
                            aprender temas nuevos esto hace de mi una persona constante, curiosa y sin miedos d eenfrentarme a nuevos retos.
                        </p>
                        <a href="#contact" className="btn btn-primary">Let's Talk</a>
                    </div>
                </div>
        </section>
    )
}

export default About