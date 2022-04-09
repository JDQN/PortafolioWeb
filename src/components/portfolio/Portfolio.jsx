import React from 'react'
import './portfolio.css'
import data from '../../data'
import { BsGithub } from 'react-icons/bs'

const Portfolio = () => {

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, description, github, demo}) => {
                        return(
                            <article key={id} className="portfolio__item">
                                <div className='portfolio__item-image'>
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <p className='portfolio__description'>{description}</p>
                                <div className="portfolio__item-cta">
                                    <a  href={github} className="btn" target="_blank">
                                        <BsGithub/> GitHub
                                    </a>
                                    <a href={demo}  className="btn btn-primary" target="_blank">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio