import { ArrowUpRight, Flame } from "lucide-react";
import { Link } from "react-router";
import { navigation } from "../../config/site";

export const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-top">
      <div className="footer-about">
        <Link to="/" className="brand footer-brand">
          <span className="brand-symbol" aria-hidden="true">
            ✳
          </span>
          ELDER<span>BURGER</span>
        </Link>
        <p>
          Una propuesta visual inspirada en la parrilla, las hamburguesas y los
          momentos que vale la pena compartir.
        </p>
        <span className="footer-demo">
          <Flame size={15} aria-hidden="true" /> Proyecto demostrativo
        </span>
      </div>
      <div className="footer-links-col">
        <h3>Explora</h3>
        <ul>
          {navigation.slice(0, 5).map(({ href, label }) => (
            <li key={href}>
              <Link to={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-links-col">
        <h3>Reservas</h3>
        <p>
          Prepara una solicitud y compártela por WhatsApp. La mesa no queda
          confirmada automáticamente.
        </p>
        <Link to="/reservas" className="footer-inline-link">
          Preparar solicitud <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
    <div className="container footer-bottom">
      <span>© {new Date().getFullYear()} ElderBurger · Sitio conceptual</span>
      <span>Diseñado para evolucionar.</span>
    </div>
  </footer>
);
