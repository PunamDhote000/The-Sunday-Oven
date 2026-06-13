function Menu() {
  return (
    <section className="menu" id="menu">
      <h2>Our Menu</h2>

      <div className="menu-container">

        <div className="menu-card">
          <h3>Cakes</h3>
          <p>Freshly baked delicious cakes for every occasion.</p>
        </div>

        <div className="menu-card">
          <h3>Cookies</h3>
          <p>Crunchy and soft cookies made with love.</p>
        </div>

        <div className="menu-card">
          <h3>Pastries</h3>
          <p>Sweet pastries baked fresh every morning.</p>
        </div>

        <div className="menu-card">
          <h3>Breads</h3>
          <p>Healthy artisan breads with premium ingredients.</p>
        </div>

      </div>
    </section>
  );
}

export default Menu;