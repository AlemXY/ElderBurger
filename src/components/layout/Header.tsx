import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router';
import { navigation } from '../../config/site';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  // El cambio de ruta desmonta el menú abierto sin efectos globales.
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/" aria-label="ElderBurger, volver al inicio" onClick={close}>
          <span className="brand-symbol" aria-hidden="true">✳</span>
          ELDER<span>BURGER</span>
        </Link>
        <nav className={`main-nav ${open ? 'is-open' : ''}`} id="main-nav" aria-label="Navegación principal">
          {navigation.map(({ href, label }) => (
            <NavLink key={href} to={href} end={href === '/'} onClick={close} className={({ isActive }) => `nav-link ${isActive ? 'is-current' : ''}`}>
              {label}
            </NavLink>
          ))}
          <Link to="/reservas" onClick={close} className="button button-primary mobile-nav-action">Solicitar mesa <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </nav>
        <Link to="/reservas" className="button button-primary header-cta" aria-label="Solicitar mesa por WhatsApp">Solicitar mesa <ArrowUpRight size={17} aria-hidden="true" /></Link>
        <button className="menu-toggle" type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-controls="main-nav" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
      {open && <button type="button" className="nav-overlay" aria-label="Cerrar menú de navegación" onClick={close} />}
      <span className="sr-only" aria-live="polite">{pathname === '/' ? 'Página de inicio' : ''}</span>
    </header>
  );
};
