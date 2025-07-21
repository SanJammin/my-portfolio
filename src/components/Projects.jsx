'use client';
import Link from 'next/link';
import Image from 'next/image';
import projects from '../data/projects';
import '../app/globals.css';

export default function Projects() {
  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
          <p className="heading-sec__sub">
            A selection of my recent work. Click through to explore how each project was built.
          </p>
        </h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card__image">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={350}
                  className="project-card__img"
                />
              </div>

              <div className="project-card__content">
                <h3 className="project-card__title">{project.name}</h3>
                <p className="project-card__description">{project.description}</p>

                <div className="project-card__stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="project-card__tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link href={`/projects/${project.slug}`} className="btn btn--med btn--theme">
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
