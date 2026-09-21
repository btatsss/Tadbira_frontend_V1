import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">

        <div className="projects-header">
          <div>
            <p className="eyebrow">SELECTED WORK</p>

            <h2>
              Work That
              <span> Speaks For Itself.</span>
            </h2>
          </div>

          <div className="projects-header-text">
            <p>
              We work with ambitious businesses to turn complex challenges
              into clear strategies, stronger systems, and measurable growth.
            </p>

            <div className="projects-count">
              <strong>03</strong>
              <span>Selected Projects</span>
            </div>
          </div>
        </div>

        <div className="projects-showcase">

          {projects.map((project, index) => (
            <article
              className="project-showcase-card"
              key={project.id}
            >

              {/* Visual */}
              <div className={`project-visual ${project.visual}`}>

                <div className="visual-grid" />

                <div className="visual-content">

                  <span className="visual-label">
                    TADBIRA
                  </span>

                  {project.visual === "meridian" && (
                    <div className="meridian-visual">
                      <span className="visual-big-number">
                        340%
                      </span>

                      <span className="visual-small-text">
                        REVENUE GROWTH
                      </span>

                      <div className="visual-bars">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  )}

                  {project.visual === "atlas" && (
                    <div className="atlas-visual">
                      <span className="visual-big-number">
                        $12M
                      </span>

                      <span className="visual-small-text">
                        SERIES A
                      </span>

                      <div className="atlas-circle">
                        <span>CAPITAL</span>
                      </div>
                    </div>
                  )}

                  {project.visual === "nova" && (
                    <div className="nova-visual">
                      <div className="nova-orbit">
                        <span className="nova-center">N</span>
                        <span className="nova-dot dot-one" />
                        <span className="nova-dot dot-two" />
                        <span className="nova-dot dot-three" />
                      </div>

                      <span className="visual-small-text">
                        MENA EXPANSION
                      </span>
                    </div>
                  )}

                </div>

                <div className="visual-index">
                  0{index + 1}
                </div>

              </div>

              {/* Content */}
              <div className="project-showcase-content">

                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>

                <h3>{project.title}</h3>

                <p className="project-showcase-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-showcase-bottom">

                  <div className="project-result-box">
                    <span>KEY RESULT</span>
                    <strong>{project.result}</strong>
                  </div>

                  <button
                    className="project-view-button"
                    type="button"
                    aria-label={`View ${project.title}`}
                  >
                    <span>View Project</span>
                    <span className="view-arrow">↗</span>
                  </button>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;