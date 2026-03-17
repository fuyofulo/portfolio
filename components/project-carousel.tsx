"use client";

import { useMemo, useState } from "react";
import { TechPill } from "./tech-pill";

type Project = {
  title: string;
  description: string;
  code: string;
  tags: readonly string[];
};

type ProjectCarouselProps = {
  projects: readonly Project[];
  title: string;
};

export function ProjectCarousel({ projects, title }: ProjectCarouselProps) {
  const perPage = 4;
  const [page, setPage] = useState(0);

  const pages = useMemo(() => {
    const paginated: Project[][] = [];

    for (let index = 0; index < projects.length; index += perPage) {
      paginated.push(projects.slice(index, index + perPage));
    }

    return paginated;
  }, [projects]);

  const currentPage = pages[page] ?? [];
  const canScrollPrev = page > 0;
  const canScrollNext = page < pages.length - 1;

  return (
    <div className="other-carousel">
      <div className="other-carousel__header">
        <h2>{title}</h2>
        <div className="other-carousel__controls">
          <button
            className="carousel-button"
            type="button"
            onClick={() => setPage((value) => Math.max(value - 1, 0))}
            disabled={!canScrollPrev}
            aria-label="scroll previous projects"
          >
            &lt;
          </button>
          <span className="carousel-page-indicator">
            {page + 1}/{pages.length}
          </span>
          <button
            className="carousel-button"
            type="button"
            onClick={() =>
              setPage((value) => Math.min(value + 1, pages.length - 1))
            }
            disabled={!canScrollNext}
            aria-label="scroll next projects"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="other-carousel__grid">
        {currentPage.map((project) => (
          <article className="carousel-card" key={project.title}>
            <div className="carousel-card__body">
              <div className="carousel-card__header">
                <h3>{project.title}</h3>
                <a href={project.code} target="_blank" rel="noreferrer">
                  code
                </a>
              </div>
              <p>{project.description}</p>
              <ul className="tag-list" aria-label="technologies">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <TechPill label={tag} />
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
