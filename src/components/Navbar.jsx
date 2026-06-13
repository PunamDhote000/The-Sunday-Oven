import logo from "../assets/images/logo.jpg";

function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="The Sunday Oven Logo" />
        <div>
          <h2>The Sunday Oven</h2>
          <p className="tagline">Freshly Baked Happiness</p>
        </div>
      </div>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;




