import React from 'react'
import '../app/styles/skills.css';

const Skills = () => {
  return (
    <div id='skills' className="skills-container">
        <div className="skills-grid">
            {/* first column: heading and paragraph */}
            <div  data-aos="zoom-in-up" className="skills-left">
                <h2 className="skills-heading">Technologies I Work With</h2>
                <p className="skills-text">I have a robust foundation in web development, particularly in HTML, CSS, and JavaScript, and bring hands-on experience with frameworks like React and Next.js for crafting interactive, user-focused applications. I am also skilled in Tailwind CSS, which supports efficient styling and design. Eager to learn, I stay current with emerging technologies to strengthen my abilities and make impactful contributions to projects.</p>

            </div>

            {/* second column: Skills */}
            <div className="skills-right">
                <div className="skills-icon-grid">
                <div className="skills-space">
                    <h2  data-aos="zoom-in-up">Typescript</h2>
                    <h2  data-aos="zoom-in-up">React.js</h2>
                    <h2  data-aos="zoom-in-up">Next.js</h2>
                    <h2  data-aos="zoom-in-up">Node.js</h2>
                    <h2  data-aos="zoom-in-up">CSS</h2>
                    <h2  data-aos="zoom-in-up">Tailwind</h2>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Skills;
