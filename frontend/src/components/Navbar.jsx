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
                        <Link to="/projects" className="nav-link">
                            <li>Projects</li>
                        </Link>
                        <Link to="/about" className="nav-link">
                            <li>About</li>
                        </Link>
                        <Link to="/contact" className="nav-link">
                            <li>Contact</li>
                        </Link>
                        <button className="nav-link menu" onClick={toggleMenu}>
                            <img src="assets/menu.svg" alt="Menu" />
                        </button>
                    </ul>
                </nav>
            </header>
            {menuOpen && (
                <div className="fullscreen-menu">
                    <ul className="fullscreen-links">
                        <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
                        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
}
