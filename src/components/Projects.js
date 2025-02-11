"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Heading_1 = __importDefault(require("./Heading"));
const Card_1 = __importDefault(require("./Card"));
const data = [
    {
        id: 0,
        title: "Todo List",
        desc: " An app based on React & Typescript to create a list of tasks managed and organized efficiently.",
        img: "/todo list.png",
        tags: ["React", "Typescript", "Node", "CSS"],
    },
    {
        id: 1,
        title: "Countdown Timer",
        desc: " A powered website to track time with an interactive featured countdown with Next.js & Typescript.",
        img: "/CD timer.jpg",
        tags: ["Next.js", "Typescript", "Node", "CSS"],
    },
    {
        id: 2,
        title: "Weather updates",
        desc: " Advanced tool of Next.js & Typescript for fetching and displaying real-time weather updates ",
        img: "/weather widget.jpeg",
        tags: ["Next.js", "Typescript", "Node", "CSS"],
    },
    {
        id: 3,
        title: "Currency Converter Project",
        desc: " A simple HTML & Typescript based currency converter project that provides currency rates converted with real-time rates",
        img: "/currency converter.png",
        tags: ["HTML", "Typescript", "Node", "CSS"],
    },
    {
        id: 4,
        title: "Static Interactive Resume",
        desc: " An ineractive resume built with HTML,CSS and Typescript, for users to showcase their skills dynamically.",
        img: "/static resume.jpeg",
        tags: ["HTML", "Typescript", "Node", "CSS"],
    },
    {
        id: 5,
        title: "Simple Calculator Project",
        desc: " A simple HTML, CSS and Typescript calculator for performing essential mathematical operations. ",
        img: "/calculator.png",
        tags: ["HTML", "Typescript", "Node", "CSS"],
    },
];
const Projects = () => {
    return (<div id='projects' className='container pt-32'>
      <Heading_1.default title={'My Projects'}/>
       <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
         {data.map((el) => (<Card_1.default key={el.id} title={el.title} desc={el.desc} img={el.img} tags={el.tags}/>))}

       </div>



    </div>);
};
exports.default = Projects;
