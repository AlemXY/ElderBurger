import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import type { MenuItem } from "../../data/menu";

export const DishCard = ({ item }: { item: MenuItem }) => (
  <article className="dish-card">
    <div className="dish-image">
      <img src={item.image} alt={item.name} loading="lazy" />
      <span className="dish-label">Selección de la casa</span>
    </div>
    <div className="dish-content">
      <div className="dish-top">
        <h3>{item.name}</h3>
        <ArrowUpRight size={20} aria-hidden="true" />
      </div>
      <p>{item.description}</p>
      <Link to="/menu" className="text-link">
        Descubre nuestra carta <span aria-hidden="true">↗</span>
      </Link>
    </div>
  </article>
);
