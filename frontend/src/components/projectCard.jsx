import "../style/projectCard.css"
import Tag from "./tag.jsx"

export default function ProjectCard({title, description, tags, url}) {
    console.log(tags)
    return <div className="project-card">
        <h3 className="project-card-header">{title}</h3>
        <p className="project-card-description">{description}</p>
        <div className="project-tag-container">
        {tags.map((tag) => {
            return <Tag text={tag}></Tag>
        })}
        </div>
    </div>

}

