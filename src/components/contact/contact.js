import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { ImTwitter } from 'react-icons/im';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_j3ufepd', 'template_o9143ye', form.current, 'fQkwaBxJsMFNov2mc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <section id='contact'>
            <h2>Contact</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>olusegundavids1@gmaii.com</h5>
                        <a href="mailto:olusegundavids1@gmail.com" target='_blank'>Send an email</a>
                    </article>

                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>Phone number</h5>
                        <a href="https://api.whatsapp.com/send?phone=2349080797651" target='_blank'>Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" id="" placeholder='Your full name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;
