import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import { FiSmartphone } from 'react-icons/fi'
import { AiFillFormatPainter } from 'react-icons/ai'
import { AiFillApi } from 'react-icons/ai'
import { AiOutlineDesktop } from 'react-icons/ai'
import { AiOutlineBgColors } from 'react-icons/ai'
import { AiOutlineFileProtect } from 'react-icons/ai'
import { VscError } from 'react-icons/vsc'
import { ImWarning } from 'react-icons/im'
import { MdOutlineDesignServices } from 'react-icons/md'
import { SiAdobeillustrator } from 'react-icons/si'
import { ImHtmlFive2 } from 'react-icons/im'


const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">

                {/* START OF UI/UX */}
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Desing</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <FiSmartphone className='service__list-icon'/>
                            <p>Fully Responsive</p>
                        </li>

                        <li>
                            <AiFillFormatPainter className='service__list-icon'/>
                            <p>Creative Desing</p>
                        </li>

                        <li>
                            <AiFillApi className='service__list-icon'/>
                            <p>Social Media Integration</p>
                        </li>
                    </ul>
                </article>

                {/* START OF WEB DEVELOPMENT */}
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <AiOutlineDesktop className='service__list-icon'/>
                            <p>Web application</p>
                        </li>

                        <li>
                            <AiOutlineBgColors className='service__list-icon'/>
                            <p>Custom website</p>
                        </li>

                        <li>
                            <AiOutlineFileProtect className='service__list-icon'/>
                            <p>Landing page</p>
                        </li>

                        <li>
                            <ImWarning className='service__list-icon'/>
                            <p>Mantenimiento de páginas web</p>
                        </li>

                        <li>
                            <VscError className='service__list-icon'/>
                            <p>Error correction</p>
                        </li>
                    </ul>
                </article>

                {/* START CONTENT */}
                <article className="service">
                    <div className="service__head">
                        <h3>Volunteering</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <SiAdobeillustrator className='service__list-icon'/>
                            <p>Adobe illustrator.</p>
                        </li>

                        <li>
                            <MdOutlineDesignServices className='service__list-icon'/>
                            <p>Web design.</p>
                        </li>

                        <li>
                            <ImHtmlFive2 className='service__list-icon'/>
                            <p>Html y Css</p>
                        </li>
                    </ul>
                </article>

            </div>
        </section>
    )
}

export default Services