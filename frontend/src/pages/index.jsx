import "../style/indexPage.css"
import ProjectCard from "../components/projectCard.jsx"
import ExperienceCard from "../components/experienceCard.jsx"
export default function IndexPage() {
     return <div className="index-page">
         <div className="index-container">
            <div className="index-left">
               <h1 className="index-header">Eric Zuo</h1>
               <h2 className="index-sub-header">Full-Stack Engineer</h2>
               <p className="index-sub-text">I build full-stack web applications that blend thoughtful design with rich features and accessiblility.</p>
               <div className="index-headshot-container">
               </div>
            </div>
            <div className="index-right">
               <p className="index-paragraph">Hello, I'm an independent developer from Calgary, Alberta. My primary tech stack is PERN (PostgreSQL, Express, React, Node.js).</p>
               <p className="index-paragraph">From learning how to center a div to developing my first full-stack web application, my web development journey has been one of continuous growth and discovery. Each project has deepened my skills and fueled my passion for building impactful solutions. I’m eager to use my experience to contribute meaningfully and continue expanding my abilities to tackle even greater challenges in the future.</p>
               <p className="index-paragraph index-paragraph-last">I've had the opportunity to work on many unique projects, with many unique people. <span className="bold">Now I want to work with you.</span></p>
               <div className="index-divider"></div>
               <div className="project-container">
                  <ProjectCard title={"ChangePod"} description={"1st place winner ($5000) of Hack the Change 2024. A dynamic web application connected to an Arduino and ESP32, that aggregates user data and turns it into suggestions to help improve the community."} tags={["React", "Flask", "PostgreSQL", "CSS", "OpenAI" ]} urls={["https://github.com/Flaryiest/hack-the-change", "https://devpost.com/software/changepod"]}/>
               </div>
               <div className="experience-container">
                  <ExperienceCard title={"Director of Technology - Futurlign"} description={"Cofounder and Director of Technology for Futurlign, a non-profit dedicated to AI awareness and education. Responsibilities include designing and developing the organization's website, leading event planning efforts, contributing to impactful presentations on AI topics, and collaborating with team members to execute projects and educational programs successfully."} startDate={"Oct 2023"} endDate={"Ongoing"}/>
                  <ExperienceCard title={"USG of Technology - SWCHSMUN"} description={"Served as the USG of Technology for SWCHSMUN, the largest Model United Nations conference in Alberta (over 400 attendees). Worked on the website, video editing, and collaborated with team members to ensure the event ran smoothly."} startDate={"Dec 2023"} endDate={" Oct 2024"}/>
               </div>
            </div>
         </div>
     </div>
}
