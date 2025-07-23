import projects from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ProjectDetail({ params }) {
  const { slug } = params;
  const project = projects.find((proj) => proj.slug === slug);

  if (!project) return notFound();

  return (
    <section className="project-cs-hero">
      <div className="project-cs-hero__content">
        <h1 className="heading-primary">{project.name}</h1>
        <div className="project-cs-hero__info">
          <p className="text-primary">{project.description}</p>
        </div>

        <div className="project-cs-hero__cta">
          {project.live && (
            <Link href={project.live} target="_blank" className="btn btn--theme btn--med">
              Live Link
            </Link>
          )}
          {project.code && (
            <Link href={project.code} target="_blank" className="btn btn--theme-inv btn--med">
              Code Link
            </Link>
          )}
        </div>
      </div>

      <div className="project-details__content">
        <div className="project-details__showcase-img-cont">
          <Image
            src={project.image}
            alt={`${project.name} Screenshot`}
            width={1000}
            height={500}
            className="project-details__showcase-img"
          />
        </div>

        <div className="project-details__content-main">
          {/* Tools Used */}
          <section className="project-details__tools-used">
            <h3 className="project-details__content-title">Tools Used</h3>
            <div className="project-details__tools-used-list">
              {project.stack.map((tool) => (
                <span key={tool} className="project-details__tools-used-item-project-page">
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Details */}
          {project.details && (
            <section className="project-details__desc">
              <h3 className="project-details__content-title">Project Highlights</h3>
              <ul className="project-details__desc-list">
                {project.details.map((point, idx) => (
                  <li key={idx} className="project-details__desc-details">
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Back to Projects */}
          <div style={{ marginTop: '2rem' }}>
            <Link href="/#projects" className="btn btn--med btn--theme-inv">
              ← Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
