import "../style/experienceCard.css"

export default function ExperienceCard({title, description, startDate, endDate, url}) {
    return <div className="experience-card">
        <div className="experience-card-dates">
            {startDate} - {endDate}
        </div>
        <div className="experience-card-info-container">
            <div className="experience-card-header-container">
                <h3 className="experience-card-header">{title}</h3>
                {url && (
                    <a 
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="experience-card-link"
                    >
                        <svg 
                            className="experience-card-link-icon" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            width="20" 
                            height="20" 
                            fill="none" 
                            stroke="#10b981" 
                            strokeWidth="2.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                )}
            </div>
            <p className="experience-card-description">{description}</p>
        </div>
    </div>
}