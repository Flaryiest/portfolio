import "../style/indexPage.css"
import ProjectCard from "../components/projectCard.jsx"
import ExperienceCard from "../components/experienceCard.jsx"
export default function IndexPage() {
     return <div className="index-page">
         <div className="index-container">
               <div className="index-left-container">
                  <div className="index-left">
                     <h1 className="index-header">Eric Zuo</h1>
                     <h2 className="index-sub-header">Full-Stack Developer</h2>
                     <p className="index-sub-text">I build full-stack web applications that blend thoughtful design with rich features and accessiblility.</p>
                     <div className="index-headshot-container">
                        <img className="index-headshot" src="/assets/cat-placeholder.jpg" alt="Eric Zuo"></img>
                     </div>
                     <div className="social-links">
                        <a className="social-link" href="https://linkedin.com/in/ericzuo8" target="_blank" rel="noopener noreferrer"><img src="/assets/linkedin-logo.svg" alt="LinkedIn"></img></a>
                        <a className="social-link" href="https://github.com/Flaryiest" target="_blank" rel="noopener noreferrer"><img src="/assets/github-logo.svg" alt="GitHub"></img></a>
                     </div>
                  </div>
               </div>

            <div className="index-right">
               <p className="index-paragraph">Hello, I'm an independent developer from Calgary, Alberta. My primary tech stack is PERN (PostgreSQL, Express, React, Node.js).</p>
               <p className="index-paragraph">From learning how to center a div to developing my first full-stack web application, my web development journey has been one of continuous growth and discovery. Each project has deepened my skills and fueled my passion for building impactful solutions. I'm eager to use my experience to contribute meaningfully and continue expanding my abilities to tackle even greater challenges in the future.</p>
               <p className="index-paragraph index-paragraph-last">I've had the opportunity to work on many unique projects, with many unique people. <span className="bold">Now I want to work with you.</span></p>
               <div className="index-divider"></div>
               <div className="project-container">
                  <ProjectCard 
                     title={"Evolition"} 
                     description={"A skill-based task management application that transforms regular to-do lists into meaningful skill progression. Users complete tasks to level up skills while receiving AI-generated task suggestions based on their development goals."} 
                     tags={["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "OpenAI"]} 
                     urls={["https://github.com/Flaryiest/evolition"]}
                  />
                  <ProjectCard 
                     title={"ChangePod"} 
                     description={"1st place winner ($5000) of Hack the Change 2024. A dynamic web application connected to an Arduino and ESP32, that aggregates user data and turns it into suggestions to help improve the community."} 
                     tags={["React", "Flask", "PostgreSQL", "CSS", "OpenAI"]} 
                     urls={["https://github.com/Flaryiest/hack-the-change", "https://devpost.com/software/changepod"]}
                  />
                  <ProjectCard 
                     title={"LifePod"} 
                     description={"1st place winner of MiniMedi Hacks 2024. A medical-oriented web application using TypeScript, React, and Node.js with real-time communication for medical professionals."} 
                     tags={["TypeScript", "React", "Node.js", "PostgreSQL", "CSS"]} 
                     urls={["https://github.com/Flaryiest/LifePod"]}
                  />
                  <ProjectCard 
                     title={"Computing4Charity"} 
                     description={"Full-stack application enabling users to mine cryptocurrency and redeem points for donations to charities."} 
                     tags={["TypeScript", "React", "Node.js", "Express", "PostgreSQL", "Python"]} 
                     urls={["https://github.com/Flaryiest"]}
                  />
               </div>
               <div className="experience-container">
                  <ExperienceCard title={"Web Developer - Elvaria"} description={"Developed a dynamic website using React, TypeScript, and Node.js with PostgreSQL. Built a volunteer management portal reducing management time by 40%. Designed the website's layout in Figma using UI/UX principles."} startDate={"Jan 2025"} endDate={"Mar 2025"}/>
                  <ExperienceCard title={"Director of Technology - Futurlign"} description={"Led AI workshops for over 100 students, delivering practical knowledge and hands-on experience with coding. Collaborated with a team of 20 individuals to design and create a comprehensive AI curriculum."} startDate={"Oct 2023"} endDate={"Ongoing"}/>
                  <ExperienceCard title={"Robotics Engineer - Vex Robotics"} description={"Programmed autonomous and driver-control systems in C++, integrating odometry and PID for precision. Designed and built robots, utilizing pneumatics and motors, winning Judges Award at provincials."} startDate={"Sep 2025"} endDate={"Ongoing"}/>
               </div>
            </div>
         </div>
     </div>
}
