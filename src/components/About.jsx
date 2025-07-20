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
            I'm a frontend developer from England, UK. I love building apps that solve real-world
            problems and that are delightful to use. My specialties include React JS and Styled
            Components.
          </p>
        </h2>

        <div className="about__content">
          {/* Personal Summary */}
          <div className="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                My background is in facilities management. When I'm not coding, I'm learning
                languages, playing games, and reading.
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
