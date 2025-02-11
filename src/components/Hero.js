"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Navbar_1 = __importDefault(require("./Navbar"));
const Hero = () => {
    return (<div id="hero" className="bg-myImg bg-cover min-h-screen bg-no-repeat bg-left lg:bg-[15%]" style={{ backgroundSize: "15%" }}>
      
      <Navbar_1.default />
       
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">

       <div className="hidden lg:block"></div>

         <div className="text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center">

            <div>
               <p data-aos="zoom-in-up">I'm</p>
               <p data-aos="zoom-in-up">Faryal</p>
               <p data-aos="zoom-in-up">Faisal</p>

        </div>

      </div>

    </div>

  </div>);
};
exports.default = Hero;
