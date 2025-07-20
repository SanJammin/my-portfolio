"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../app/globals.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    return(
        <header className="header">
            <div className="header__content">
                <div className="header__logo-container" onClick={() => (window.location.href = "/")}>
                    <div className="header__logo-img-cont">
                        <img
                            src="#"
                            alt="Logo Image"
                            className="header__logo-img"
                        />
                    </div>
                    <span className="header__logo-sub">James (Freddie) Farr</span>
                </div>
                <div className="header__main">
                    <ul className="header__links">
                        <li className="header__link-wrapper">
                            <a href="index.html" className="header__link">Home</a>
                        </li>
                        <li className="header__link-wrapper">
                            <a href="index.html#projects" className="header__link">Projects</a>
                        </li>
                        <li className="header__link-wrapper">
                            <a href="index.html#about" className="header__link">About</a>
                        </li>
                        <li className="header__link-wrapper">
                            <a href="index.html#contact" className="header__link">Contact</a>
                        </li>
                    </ul>

                    
                    {/* Mobile menu toggle */}
                    <div className="header__main-ham-menu-cont" onClick={toggleMenu}>
                        <Image
                        src="/assets/svg/ham-menu.svg"
                        alt="hamburger menu"
                        width={30}
                        height={30}
                        className={`header__main-ham-menu ${menuOpen ? 'd-none' : ''}`}
                        />
                        <Image
                        src="/assets/svg/ham-menu-close.svg"
                        alt="hamburger menu close"
                        width={30}
                        height={30}
                        className={`header__main-ham-menu-close ${menuOpen ? '' : 'd-none'}`}
                        />
                    </div>
                </div>
            </div>
            
            {/* Mobile menu */}
            <div className={`header__sm-menu ${menuOpen ? 'header__sm-menu--active' : ''}`}>
                <div className="header__sm-menu-content">
                <ul className="header__sm-menu-links">
                    {['Home', 'Projects', 'About', 'Contact'].map((text) => (
                    <li className="header__sm-menu-link" key={text}>
                        <Link href={`#${text.toLowerCase()}`} onClick={closeMenu}>
                        {text}
                        </Link>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
        </header>
    );
}