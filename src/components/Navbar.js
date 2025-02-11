"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ai_1 = require("react-icons/ai");
const react_2 = require("react");
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = (0, react_2.useState)(false);
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (<div className="container pt-8">
        <div className='flex justify-between items-center'>
           <div className='text-xl font-medium'>Faryal Faisal</div>

     <ul className='gap-10 lg:gap-16 hidden md:flex'>
        <li className='menuLink'><a href="#hero">Home</a></li>
        <li className='menuLink'><a href="#about">About</a></li>
        <li className='menuLink'><a href="#projects">Projects</a></li>
        <li className='menuLink'><a href="#skills">Skills</a></li>
        <li className='menuLink'><a href="#contact">Contact</a></li>

     </ul>
     <div className="md:hidden" onClick={handleMenuToggle}>
      {isMenuOpen ? <ai_1.AiOutlineClose size={30}/> :
            <ai_1.AiOutlineMenu size={30}/>}

     </div>

    </div>

  {isMenuOpen && (<ul className='flex flex-col gap-4 mt-4 md:hidden'>
        <li className='menuLink'>
          <a href="#hero" onClick={handleMenuToggle}>Home</a>
          </li>
        <li className='menuLink'>
          <a href="#about" onClick={handleMenuToggle}>About</a>
          </li>
        <li className='menuLink'>
          <a href="#projects" onClick={handleMenuToggle}>Projects</a>
          </li>
        <li className='menuLink'>
          <a href="#skills" onClick={handleMenuToggle}>Skills</a>
          </li>
        <li className='menuLink'>
          <a href="#contact" onClick={handleMenuToggle}>Contact</a>
          </li>
      </ul>)}

    </div>);
};
exports.default = Navbar;
