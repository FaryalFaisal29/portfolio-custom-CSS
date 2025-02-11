"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Skills = () => {
    return (<div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>Technologies I Work With</h2>
                <p className='text-gray-500 pt-2'>I have a robust foundation in web development, particularly in HTML, CSS, and JavaScript, and bring hands-on experience with frameworks like React and Next.js for crafting interactive, user-focused applications. I am also skilled in Tailwind CSS, which supports efficient styling and design. Eager to learn, I stay current with emerging technologies to strengthen my abilities and make impactful contributions to projects.</p>

            </div>

            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Typescript</h2>
                    <h2 data-aos="zoom-in-up">React.js</h2>
                    <h2 data-aos="zoom-in-up">Next.js</h2>
                </div>
                
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Node.js</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">Tailwind</h2>
                </div>
                </div>
            </div>

        </div>
      
    </div>);
};
exports.default = Skills;
