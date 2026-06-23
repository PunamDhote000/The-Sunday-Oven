function MenuCard({ title, image, icon, items }) {
  return (
    <div className="menu-card">

      <img
        src={image}
        alt={title}
        className="menu-image"
      />

      <div className="card-icon">
        {icon}
      </div>

      <div className="card-content">

        <h3>{title}</h3>

        <div className="divider"></div>

        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default MenuCard;