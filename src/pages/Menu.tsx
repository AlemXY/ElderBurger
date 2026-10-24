import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { PageHero } from "../components/ui/PageHero";
import { menuCategories, menuItems, type MenuCategory } from "../data/menu";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const Menu = () => {
  useDocumentTitle("Menú");
  const [active, setActive] = useState<MenuCategory>("Principales");
  const items = menuItems.filter((item) => item.category === active);
  return (
    <>
      <PageHero
        eyebrow="NUESTRA CARTA"
        title="Un antojo para cada ocasión."
        description="Desde hamburguesas hasta algo dulce para cerrar. Explora una carta de muestra basada en el proyecto original."
        image="/assets/parrilla.webp"
        imageAlt="Parrillada servida con papas y acompañamientos"
      />
      <section className="section">
        <div className="container">
          <div className="menu-intro">
            <div>
              <h2>Explora los sabores.</h2>
              <p>Elige una categoría para ver sus platos.</p>
            </div>
            <div className="menu-disclaimer">
              Carta y precios ilustrativos en USD. No habilita compras ni
              pedidos.
            </div>
          </div>
          <div className="menu-tabs" aria-label="Categorías del menú">
            {menuCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`menu-tab ${active === cat ? "is-active" : ""}`}
                aria-pressed={active === cat}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="menu-list" aria-live="polite">
            {items.map((item) => (
              <article className="menu-row" key={item.id}>
                <div className="menu-row-main">
                  <h3>{item.name}</h3>
                  {item.description && <p>{item.description}</p>}
                </div>
                <span className="menu-price">${item.price.toFixed(2)}</span>
              </article>
            ))}
          </div>
          <div className="menu-bottom">
            <span>¿Te gustaría visitar ElderBurger?</span>
            <Link to="/reservas" className="button button-primary">
              Prepara tu solicitud <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
