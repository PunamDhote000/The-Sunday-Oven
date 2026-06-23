function Footer() {
  const phoneNumber = "918924089746";
  const message = "Hello! I would like to place an order from The Sunday Oven";
  const url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  return (
    <footer className="footer">
      <h2>The Sunday Oven</h2>

      <p>✨ Freshly Baked Happiness ✨</p>

    

      <p>© 2026 The Sunday Oven. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;