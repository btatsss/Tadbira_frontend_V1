const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-main">
        <div>
          <button
            className="footer-logo"
            onClick={() => scrollToSection("home")}
          >
            TADBIRA
          </button>

          <p>
            Building practical solutions for businesses ready to grow.
          </p>
        </div>

        <div className="footer-links">
          <button onClick={() => scrollToSection("services")}>
            Services
          </button>

          <button onClick={() => scrollToSection("projects")}>
            Projects
          </button>

          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Tadbira. All rights reserved.
        </span>

        <span>Business • Technology • Growth</span>
      </div>
    </footer>
  );
};

export default Footer;