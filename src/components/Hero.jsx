"use client";
import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";

export default function Hero() {
    return(
        <section className="home-hero">
            <div className="home-hero__content">
                <h1 className="heading-primary">Hey, my name is Freddie Farr</h1>
                <div className="home-hero__info">
                    <p className="text-primary">
                        I’m a frontend developer based in the UK, passionate about growth in code, creativity, and character. 
                        I build clean, responsive apps with React and care deeply about creating experiences users genuinely enjoy.
                    </p>
                </div>
                <div className="home-hero__cta">
                    <a href="#projects" className="btn btn--bg">See my projects</a>
                </div>
            </div>
            <div className="home-hero__socials">
                <div className="home-hero__social">
                    <a href="#" className="home-hero__social-icon-link">
                        <img 
                            src="assets/img/linkedin-ico.png"
                            alt="linkedin icon"
                            className="home-hero__social-icon"
                        />
                    </a>
                </div>
                <div className="home-hero__social">
                    <a target="_blank" href="https://github.com/SanJammin" className="home-hero__social-icon-link">
                        <img 
                            src="assets/img/github-ico.png"
                            alt="github-ico icon"
                            className="home-hero__social-icon"
                        />
                    </a>
                </div>
            </div>
            <div className="home-hero__mouse-scroll-cont">
                <div className="mouse"></div>
            </div>
        </section>
    );
}