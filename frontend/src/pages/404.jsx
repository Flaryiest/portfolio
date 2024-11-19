import Navbar from "../components/navbar"
import AnimatedCursor from "react-animated-cursor"
export default function ErrorPage() {
    return <div>
        <div className="cursor-wrapper">
            <AnimatedCursor color="68, 98, 74" zIndex={2000} />
         </div>
        <Navbar />
        <p className="error-message">This page doesn't exist sadly</p>
    </div>
}