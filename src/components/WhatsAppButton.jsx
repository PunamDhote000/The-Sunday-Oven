function WhatsAppButton() {
  const phoneNumber = "919285154554";
  const message = "Hello! I would like to place an order from The Sunday Oven";
  const url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Order on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
      <span>Order Now</span>
    </a>
  );
}

export default WhatsAppButton;
