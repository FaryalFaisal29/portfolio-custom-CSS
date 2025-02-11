"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const md_1 = require("react-icons/md");
const fa6_1 = require("react-icons/fa6");
const bs_1 = require("react-icons/bs");
const Contact = () => {
    return (<div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-3'>
                <h2 className='text-5xl' data-aos="zoom-in-up">Get In Touch</h2>
                <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up">Drop me a line, Give me a call or send me a message by submitting the form.</p>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                <md_1.MdOutlineEmail size={30}/>farfai29@hotmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                    <md_1.MdOutlinePhone size={30}/>+92 333 3257464
                </div>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                    <fa6_1.FaFacebook size={30}/>https://www.facebook.com/fari.faisal.37
                </div>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                    <bs_1.BsLinkedin size={30}/>www.linkedin.com/in/faryal-faisal-43584a256
                </div>
            </div>
             
             <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' className='w-full px-4 py-2 text-gray-700 border-2 border-gray-300 rounded-md focus:outline-none focus:border-accent'/>
                </div>

                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' className='w-full px-4 py-2 text-gray-700 border-2 border-gray-300 rounded-md focus:outline-none focus:border-accent'/>
                </div>

                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor='msg'>Message</label>
                    <textarea className='bg-transparent border border-accent' id='msg' rows={8}>
                    </textarea>
                </div>
                <button className='bg-accent p-2 px-6' data-aos="zoom-in-up">
                    Send Message
                </button>


             </div>
        </div>
      
    </div>);
};
exports.default = Contact;
