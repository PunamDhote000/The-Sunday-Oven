import WhatsAppButton from "./WhatsAppButton";

function Hero() {

  const handleExploreMenu = () => {
    document.getElementById("menu").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="home">
      <h1>The Sunday Oven</h1>

      <p>Freshly Baked Happiness</p>

      <button onClick={handleExploreMenu}>
        Explore Menu
      </button>
      <WhatsAppButton />
    </section>
  );
}

export default Hero;