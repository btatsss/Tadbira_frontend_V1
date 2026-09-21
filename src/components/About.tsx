const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div>
          <p className="eyebrow">WHO WE ARE</p>

          <h2>
            We Build With
            <span> Purpose.</span>
          </h2>
        </div>

        <div className="about-content">
          <p className="about-lead">
            Tadbira is a business and technology company focused on helping
            organizations turn challenges into opportunities.
          </p>

          <p>
            We bring together business strategy, marketing, finance, and
            automation to create practical solutions that actually work in
            the real world.
          </p>

          <p>
            Instead of offering one-size-fits-all solutions, we start by
            understanding the business, its goals, and its challenges.
            Then we build a solution around what it actually needs.
          </p>

          <div className="about-statement">
            <span>OUR APPROACH</span>

            <strong>
              Understand.
              <br />
              Build.
              <br />
              Improve.
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;