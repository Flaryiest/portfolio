import "../style/indexPage.css"
import Navbar from "../components/navbar"
import AnimatedCursor from "react-animated-cursor"
export default function IndexPage() {
     return <div className="index-page">
         <div className="cursor-wrapper">
            <AnimatedCursor color="68, 98, 74" />
         </div>
         <Navbar/>
         <div className="index-container">
            <div className="index-left">
               <h1 className="index-header">Eric Zuo</h1>
               <h2 className="index-sub-header">Full-Stack Engineer</h2>
               <p className="index-sub-text">I build full-stack web applications that blend thoughtful design with rich features and accessiblility.</p>
               <div className="index-headshot-container">
               </div>
            </div>
            <div className="index-right">
               <p className="index-paragraph">Hello, I'm an independent developer from Calgary, Alberta. My primary tech stack is PERN (PostgreSQL, Express, React, Node.js). I find joy in creating applications that serve a greater purpose.    </p>
               <p className="index-paragraph">From learning how to center a div to developing my first full-stack web application, my web development journey has been one of continuous growth and discovery. Each project has deepened my skills and fueled my passion for building impactful solutions. I’m eager to use my experience to contribute meaningfully and continue expanding my abilities to tackle even greater challenges in the future.</p>
               <p className="index-paragraph">I've had the opportunity to work on many unique projects, with many unique people. <span className="bold">Now I hope to work with you.</span></p>
            </div>
         </div>
     </div>
}
