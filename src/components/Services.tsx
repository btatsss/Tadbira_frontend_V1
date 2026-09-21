import { services } from "../data/services";

const Services = () => {
  return (
    <section className="section services-section" id="services">
      <div className="container">

        <div className="services-header">

          <div className="services-heading">
            <p className="eyebrow">WHAT WE DO</p>

            <h2>
              Built Around
              <span> Your Goals.</span>
            </h2>
          </div>

          <div className="services-intro">
            <p>
              From strategy to execution, we combine business thinking,
              technology, and practical solutions to help organizations
              move forward.
            </p>

            <div className="services-line">
              <span />
              <span>04 CORE SERVICES</span>
            </div>
          </div>

        </div>


        <div className="services-list">

          {services.map((service, index) => (
            <article
              className="service-item"
              key={service.id}
            >

              <div className="service-number">
                0{index + 1}
              </div>

              <div className="service-icon-large">
                {service.icon}
              </div>

              <div className="service-main">

                <div className="service-label">
                  {service.label}
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Display only */}
              <div className="service-action">
                <span className="service-action-text">
                  EXPLORE
                </span>

                <span className="service-action-arrow">
                  ↗
                </span>
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;