import "../style/projectCard.css"
import Tag from "./tag.jsx"

export default function ProjectCard({title, description, tags, urls}) {
    return <div className="project-card">
        <h3 className="project-card-header">{title}</h3>
        <p className="project-card-description">{description}</p>
        <div className="project-tag-container">
        {tags.map((tag) => {
            return <Tag key={tag} text={tag}></Tag>
        })}
        </div>
        <div className="project-urls-container">
            <a className="project-url" href={urls[0]}>Github Repo <img src="assets/arrow-right.svg"></img></a>
            <a className="project-url" href={urls[1]}>Learn More <img src="assets/arrow-right.svg"></img></a>
        </div>
    </div>

}

