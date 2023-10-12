import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

import './contact.css'

import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'


const Contact = () => {
    
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fmt6zik', 'template_sedl76g', form.current, '3nld3HrOdEPGeb06u')
    };



    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>

                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <a href='mailto:jdquimbayo72@misena.edu.co' target="_blank">Send message</a>
                    </article>

                    <article className='contact__option'>
                        <BsLinkedin className='contact__option-icon'/>
                        <h4>LinkedIn</h4>
                        <a href='https://www.linkedin.com/in/viamonte2319/' target="_blank">Send LinkedIn</a>
                    </article>

                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h6>321-661-53-97</h6>
                        <a href='https://api.whatsapp.com/send?phone=573216615397' target="_blank">
                            Send message
                        </a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Full Name' required/>
                    <input type="email" name="email" placeholder='Your Email' required/>
                    <textarea name="message" rows="7" placeholder='Your Message' requiere></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
