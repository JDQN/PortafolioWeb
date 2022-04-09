import React from 'react'
import './experience.css'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { GrReactjs } from 'react-icons/gr'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { FiFigma } from 'react-icons/fi'
import { SiAdobeillustrator } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiPhp } from 'react-icons/si'
import { FaLaravel } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { SiMongodb } from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'



const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>

                        <article className="experience__details">
                            <AiOutlineHtml5 className='experience__details-icon'/>
                            <h4>Html</h4>
                            <small className='text-light'></small>
                        </article>

                        <article className="experience__details">
                            <IoLogoCss3 className='experience__details-icon'/>
                            <h4>Css</h4>
                            <small className='text-light'></small>
                        </article>

                        <article className="experience__details">
                            <BsFillBootstrapFill className='experience__details-icon'/>
                            <h4>Bootstrap</h4>
                            <small className='text-light'></small>
                        </article>

                        <article className="experience__details">
                            <FiFigma className='experience__details-icon'/>
                            <h4>Figma</h4>
                            <small className='text-light'></small>
                        </article>

                        <article className="experience__details">
                            <SiAdobeillustrator className='experience__details-icon'/>
                            <h4>Illustrator</h4>
                            <small className='text-light'></small>
                        </article>

                        <article className="experience__details">
                            <GrReactjs className='experience__details-icon'/>
                            <h4>React</h4>
                            <small className='text-light'></small>
                        </article>
                    </div>
                </div>


                <div className='experience__backend'>
                    <h3>Backend Development</h3>
                    <div className='experience__content'>
                        <article className="experience__details">
                            <SiJavascript className="experience__details-icon"/>
                            <h4>Javascript</h4>
                            <small className='text-light'></small>
                        </article>

                        <article className="experience__details">
                            <SiPhp className='experience__details-icon'/>
                            <h4>Php</h4>
                            <small className='text-light'></small>
                        </article>

                        <article className="experience__details">
                            <FaLaravel className='experience__details-icon'/>
                            <h4>Laravel</h4>
                            <small className='text-light'></small>
                        </article>

                        <article className="experience__details">
                            <GrMysql className='experience__details-icon'/>
                            <h4>MySQL</h4>
                            <small className='text-light'></small>
                        </article>

                        <article className="experience__details">
                            <SiMongodb className='experience__details-icon'/>
                            <h4>Mongo DB</h4>
                            <small className='text-light'></small>
                        </article>

                        <article className="experience__details">
                            <BsGithub className='experience__details-icon'/>
                            <h4>GitHub</h4>
                            <small className='text-light'></small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience