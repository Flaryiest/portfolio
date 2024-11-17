import "../style/tag.css"

export default function Tag({text}) {
    return <div className="tag">
        <p className="tag-text">{text}</p>
    </div>
}