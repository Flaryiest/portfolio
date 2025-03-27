import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="navbar-container">
            <header className="header">
                <Link to="/" className="logo">Eric Zuo</Link>
                <nav className="nav">
                    <ul className="nav-links">
                        <li className="nav-link">
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                        </li>
                        <Link to="/contact" className="nav-link">
                            <li>Contact</li>
                        </Link>
                        <button className="menu" onClick={toggleMenu}>
                            <img src="assets/menu.svg" alt="Menu" />
                        </button>
                    </ul>
                </nav>
            </header>
            {menuOpen && (
                <div className="fullscreen-menu">
                    <ul className="fullscreen-links">
                        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Resume</a></li>
                        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
}
