function Footer() {
  const phoneNumber = "919285154554";
  const message = "Hello! I would like to place an order from The Sunday Oven";
  const url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  return (
    <footer className="footer">
      <h2>The Sunday Oven</h2>

      <p>Freshly Baked Happiness ✨</p>

      <a href={url} target="_blank" rel="noopener noreferrer" className="footer-whatsapp">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
        Order on WhatsApp
      </a>

      <p>© 2026 The Sunday Oven. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;