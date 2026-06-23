import menuData from "../data/menuData.json";
import MenuCard from "./MenuCard";

function Menu() {
  return (
    <section className="menu-section" id="menu">

      <div className="menu-heading">

        <p className="menu-subtitle">
          ─ OUR MENU ─
        </p>

        <h2>
          Made with Love,
        </h2>

        <span>
          Baked to Perfection
        </span>

      </div>

      <div className="menu-grid">

        {menuData.map((item) => (
          <MenuCard
            key={item.id}
            {...item}
          />
        ))}

      </div>

    </section>
  );
}

export default Menu;