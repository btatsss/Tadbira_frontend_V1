import { useState } from "react";
import { projects, Project } from "../data/projects";

// ✅ استدعاء الصور
const images = import.meta.glob("../assets/photography/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const getImage = (name?: string) => {
  if (!name) return "";
  return images[`../assets/photography/${name}.png`] || "";
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const systemsProjects = projects.filter((p) => p.section === "systems");
  const marketingProjects = projects.filter((p) => p.section === "marketing");

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  return (
    <section className="section projects-section" id="projects">
      <div className="container">

        {/* ============ SYSTEMS ============ */}
        <div className="projects-header">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>
              Systems That
              <span> Run Businesses.</span>
            </h2>
          </div>

          <div className="projects-header-text">
            <p>
              We design and build software systems that help companies
              operate faster, make better decisions, and scale with
              confidence.
            </p>
            <div className="projects-count">
              <strong>04</strong>
              <span>Systems Built</span>
            </div>
          </div>
        </div>

        <div className="projects-showcase">
          {systemsProjects.map((project, index) => (
            <article className="project-showcase-card" key={project.id}>

              <div className={`project-visual ${project.visual}`}>
                <div className="visual-grid" />

                <div className="visual-content">
                  <span className="visual-label">TADBIRA</span>

                  {project.visual === "meridian" && (
                    <div className="meridian-visual">
                      <span className="visual-big-number">TADBIRA</span>
                      <span className="visual-small-text">POS SYSTEM</span>
                      <div className="visual-bars">
                        <i /><i /><i /><i /><i />
                      </div>
                    </div>
                  )}

                  {project.visual === "atlas" && (
                    <div className="atlas-visual">
                      <span className="visual-big-number">ERP</span>
                      <span className="visual-small-text">FINANCE SYSTEM</span>
                      <div className="atlas-circle">
                        <span>AR / AP</span>
                      </div>
                    </div>
                  )}

                  {project.visual === "nova" && (
                    <div className="nova-visual">
                      <div className="nova-orbit">
                        <span className="nova-center">S</span>
                        <span className="nova-dot dot-one" />
                        <span className="nova-dot dot-two" />
                        <span className="nova-dot dot-three" />
                      </div>
                      <span className="visual-small-text">SCHOOL SYSTEM</span>
                    </div>
                  )}

                  {project.visual === "hr" && (
                    <div className="hr-visual">
                      <span className="visual-big-number">HR</span>
                      <span className="visual-small-text">MANAGEMENT SYSTEM</span>

                    </div>
                  )}
                </div>

                <div className="visual-index">0{index + 1}</div>
              </div>

              <div className="project-showcase-content">
                <div className="project-meta">
                  <span>{project.category}</span>
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
                </div>
              </div>

            </article>
          ))}
        </div>


        {/* ============ MARKETING ============ */}
        <div className="projects-header projects-header-marketing">
          <div>
            <p className="eyebrow">CREATIVE WORK</p>
            <h2>
              Marketing &amp;
              <span> Visual Stories.</span>
            </h2>
          </div>

          <div className="projects-header-text">
            <p>
              We craft product photography, brand visuals, and creative
              content that help businesses tell their story and connect
              with their audience.
            </p>
            <div className="projects-count">
              <strong>03</strong>
              <span>Creative Projects</span>
            </div>
          </div>
        </div>

        <div className="marketing-list">
          {marketingProjects.map((project, index) => (
            <article
              className="marketing-item"
              key={project.id}
              onClick={() => openModal(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openModal(project);
                }
              }}
            >

              <div className="marketing-number">
                0{index + 1}
              </div>

              <div className="marketing-main">
                <div className="marketing-label">
                  {project.category}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="marketing-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="marketing-result">
                <span>KEY RESULT</span>
                <strong>{project.result}</strong>
              </div>

            </article>
          ))}
        </div>

      </div>


      {/* ============ MODAL ============ */}
      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={closeModal}
        >
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="project-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              ✕
            </button>

            <div className="project-modal-image">
              <img
                src={getImage(selectedProject.image)}
                alt={selectedProject.title}
              />
            </div>

            <div className="project-modal-content">

              <div className="project-modal-meta">
                <span className="project-modal-category">
                  {selectedProject.category}
                </span>
              </div>

              <h2 className="project-modal-title">
                {selectedProject.title}
              </h2>

              <p className="project-modal-description">
                {selectedProject.description}
              </p>

              <div className="project-modal-tags">
                {selectedProject.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-modal-result">
                <span>KEY RESULT</span>
                <strong>{selectedProject.result}</strong>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;