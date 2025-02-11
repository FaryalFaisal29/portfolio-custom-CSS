import React from 'react';
import Heading from './Heading';
import Card from './Card';
import '../app/styles/projects.css';


const data=[
     {
        id : 0,
        title: "Todo List",
        desc: " An app based on React & Typescript to create a list of tasks managed and organized efficiently.",
        img: "/todo list.png",
        tags: ["React", "Typescript", "Node","CSS"],
     },
     
     {
        id : 1,
        title: "Countdown Timer",
        desc: " A powered website to track time with an interactive featured countdown with Next.js & Typescript.",
        img:"/CD timer.jpg",
        tags: ["Next.js", "Typescript", "Node","CSS"],
     },

     {
        id : 2,
        title: "Weather updates",
        desc: " Advanced tool of Next.js & Typescript for fetching and displaying real-time weather updates ",
        img: "/weather widget.jpeg",
        tags: ["Next.js", "Typescript", "Node","CSS"],
     },

     {
        id : 3,
        title: "Currency Converter Project",
        desc: " A simple HTML & Typescript based currency converter project that provides currency rates converted with real-time rates",
        img: "/currency converter.png",
        tags: ["HTML", "Typescript", "Node","CSS"],
     },

     {
        id : 4,
        title: "Static Interactive Resume",
        desc: " An ineractive resume built with HTML,CSS and Typescript, for users to showcase their skills dynamically.",
        img: "/static resume.jpeg",
        tags: ["HTML", "Typescript", "Node","CSS"],
     },

     {
       id : 5,
        title: "Simple Calculator Project",
        desc: " A simple HTML, CSS and Typescript calculator for performing essential mathematical operations. ",
        img: "/calculator.png",
        tags: ["HTML", "Typescript", "Node","CSS"],
     },

];

const Projects = () => {
  return (
    <div id='projects' className="projects-container">
      <Heading title={'My Projects'} />
       <div className="project-grid project-grid-xl project-grid-md-2 project-grid-lg-3 project-center">
         {data.map((el)=>(
            <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}    
          />
          ))}

       </div>

    </div>
  )
}

export default Projects;



