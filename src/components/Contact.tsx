import React from 'react'
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import '../app/styles/contact.css';

const Contact = () => {
  return (
    <div id='contact' className="contact-container">
        <div className="contact-grid md:grid-cols-2">
            <div className="contact-space">
                <h2 className="about-heading" data-aos="zoom-in-up">Get In Touch</h2>
                <p className="contact-text"  data-aos="zoom-in-up">Drop me a line, Give me a call or send me a message by submitting the form.</p>
                <div className="contact-flex" data-aos="zoom-in-up">
                <MdOutlineEmail size={30}/>farfai29@hotmail.com
                </div>
                <div className='flex gap-3 items-center'  data-aos="zoom-in-up">
                    <MdOutlinePhone size={30}/>+92 333 3257464
                </div>
                <div className='flex gap-3 items-center'  data-aos="zoom-in-up">
                    < FaFacebook size={30}/>https://www.facebook.com/fari.faisal.37
                </div>
                <div className='flex gap-3 items-center'  data-aos="zoom-in-up">
                    <BsLinkedin size={30}/>www.linkedin.com/in/faryal-faisal-43584a256
                </div>
            </div>
             
             <div className="contact-space">
                <div className="form"  data-aos="zoom-in-up">
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' className="input-field" />
                </div>

                <div className="form"  data-aos="zoom-in-up">
                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' className="input-field" />
                </div>

                <div className="form"  data-aos="zoom-in-up">
                    <label htmlFor='msg'>Message</label>
                    <textarea className="textarea-field" id='msg' rows={8}>
                    </textarea>
                </div>
                <button className="button"  data-aos="zoom-in-up">
                    Send Message
                </button>


             </div>
        </div>
      
    </div>
  )
}

export default Contact;
