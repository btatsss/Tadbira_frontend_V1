import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <button
          className="logo"
          onClick={() => scrollToSection("home")}
          type="button"
        >
          TADBIRA
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("services")}>
            Services
          </button>
          <button onClick={() => scrollToSection("projects")}>
            Projects
          </button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button
            className="nav-contact"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>

        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;