import { useState } from "react";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="logo-container">
        <img
          src={logo}
          alt="The Sunday Oven Logo"
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "0",
            objectFit: "contain"
          }}
        />
        <div>
          <h2>The Sunday Oven</h2>
          <p className="tagline">Freshly Baked Happiness</p>
        </div>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "nav-open" : ""}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a></li>
        <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;