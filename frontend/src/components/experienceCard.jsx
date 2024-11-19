import "../style/experienceCard.css"
export default function ExperienceCard({title, description, startDate, endDate}) {
    return <div className="experience-card">
        <div className="experience-card-dates">
            {startDate} - {endDate}
        </div>
        <div className="experience-card-info-container">
            <h3 className="experience-card-header">{title}</h3>
            <p className="experience-card-description">{description}</p>
        </div>


    </div>
}