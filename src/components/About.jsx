'use client';
import Link from 'next/link';
import '../app/globals.css';

export default function About() {
  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
          <p className="heading-sec__sub">
            My name is James Farr but most people call me Freddie based on my middle name.
            I’m a self-taught frontend developer based in England, UK with a background in facilities management. 
            I bring real-world perspective, self-discipline, and a hunger to grow, both as a developer and as a person. 
            I’m passionate about building web apps that feel purposeful, polished, and genuinely satisfying to use.
          </p>
        </h2>

        <div className="about__content">
          {/* Personal Summary */}
          <div className="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                Before tech, I worked in facilities management, where I developed a knack for solving problems 
                and working under pressure. Outside of coding, you’ll usually find me learning languages, 
                training in the gym, or deep in a game or book. I'm always chasing growth, whether it's in skill, mindset, or impact.
              </p>
            </div>
            <Link href="#contact" className="btn btn--med btn--theme dynamicBgClr">
              Contact
            </Link>
          </div>

          {/* Skills */}
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Figma'].map((skill) => (
                <div key={skill} className="skills__skill">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
