const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container hero-content">
        <p className="eyebrow">BUSINESS • TECHNOLOGY • GROWTH</p>

        <h1>
          Turning Ideas Into
          <span> Meaningful Results.</span>
        </h1>

        <p className="hero-description">
          Tadbira helps businesses grow through strategy, technology,
          automation, and practical solutions built around their goals.
        </p>

        <div className="hero-actions">
          <button className="primary-button" onClick={scrollToContact}>
            Let's Work Together
            <span>→</span>
          </button>

          <button className="secondary-button" onClick={scrollToProjects}>
            Explore Our Work
          </button>
        </div>
      </div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;