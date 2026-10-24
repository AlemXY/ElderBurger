import { ArrowRight, ArrowUpRight, BadgeCheck, Flame, Heart, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router';
import { DishCard } from '../components/ui/DishCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { featuredItems } from '../data/menu';
import { gallery } from '../data/gallery';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const values = [
  { Icon: Flame, title: 'Carácter a la brasa', description: 'Sabores intensos que inspiran cada plato de nuestro concepto.' },
  { Icon: UtensilsCrossed, title: 'Para todos los gustos', description: 'Hamburguesas, acompañamientos y algo dulce al final.' },
  { Icon: Heart, title: 'Momentos para compartir', description: 'Porque una buena mesa se disfruta mejor en compañía.' },
];

export const Home = () => {
  useDocumentTitle('Inicio');
  return <>
    <section className="hero"><div className="container hero-grid">
      <div className="hero-copy">
        <span className="eyebrow"><span className="eyebrow-dot" /> UNA EXPERIENCIA PARA COMPARTIR</span>
        <h1>El sabor tiene <em>su propio</em> lenguaje.</h1>
        <p>Hamburguesas, parrilla y buenos momentos. Descubre el concepto de ElderBurger, donde el apetito se encuentra con la experiencia.</p>
        <div className="hero-actions"><Link to="/menu" className="button button-primary">Explorar menú <ArrowUpRight size={18} aria-hidden="true" /></Link><Link to="/reservas" className="button button-outline">Solicitar una mesa <ArrowRight size={18} aria-hidden="true" /></Link></div>
        <div className="hero-footnote"><BadgeCheck size={18} aria-hidden="true" /> Sitio conceptual · Solicitudes sin confirmación automática</div>
      </div>
      <div className="hero-media"><img src="/assets/hamburguesa.webp" alt="Hamburguesa con queso y papas fritas" fetchPriority="high" /><div className="hero-image-shade" /><div className="hero-sticker"><Flame size={21} aria-hidden="true" /><span>HECHO PARA<br /><b>DISFRUTAR</b></span></div><div className="hero-picture-label">SABOR QUE REÚNE<span> / 01</span></div></div>
    </div></section>
    <div className="ribbon"><div className="container ribbon-items"><span>FUEGO & SABOR</span><i aria-hidden="true">✳</i><span>COMIDA PARA COMPARTIR</span><i aria-hidden="true">✳</i><span>BUENOS MOMENTOS</span></div></div>
    <section className="section" id="destacados"><div className="container"><SectionHeading overline="UNA MIRADA A NUESTRA CARTA" title="Para abrir el apetito." description="Una selección visual inspirada en la carta original de ElderBurger. Los productos y precios son referenciales." action={<Link to="/menu" className="text-link">Ver menú completo <ArrowUpRight size={18} aria-hidden="true" /></Link>} /><div className="dishes-grid">{featuredItems.map((item) => <DishCard item={item} key={item.id} />)}</div></div></section>
    <section className="story-split section"><div className="container story-grid"><div className="story-photo"><img src="/assets/mesa-compartida.webp" alt="Cena compartida en un restaurante" loading="lazy"/><span className="story-photo-label">El placer de sentarse a la mesa.</span></div><div className="story-copy"><span className="eyebrow"><span className="eyebrow-dot" /> NUESTRA ESENCIA</span><h2>No se trata solo de comer. Se trata de <em>disfrutar.</em></h2><p>Creemos en los sabores que invitan a quedarse un poco más. Un concepto donde cada plato y cada detalle están pensados para reunir a las personas.</p><Link to="/nosotros" className="button button-outline">Conoce el concepto <ArrowUpRight size={18} aria-hidden="true" /></Link></div></div></section>
    <section className="section values-section"><div className="container"><SectionHeading overline="LO QUE NOS INSPIRA" title="Tres ingredientes esenciales." center/><div className="values-grid">{values.map(({Icon,title,description})=><article className="value-card" key={title}><span className="value-icon"><Icon size={27} aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
    <section className="section gallery-preview"><div className="container"><SectionHeading overline="MOMENTOS EN IMÁGENES" title="Para disfrutar con los ojos." action={<Link to="/galeria" className="text-link">Explorar galería <ArrowUpRight size={18} aria-hidden="true" /></Link>}/><div className="preview-grid">{gallery.slice(0, 4).map(item=><Link to="/galeria" className="preview-tile" key={item.src}><img src={item.src} alt={item.alt} loading="lazy"/><span>{item.title}<ArrowUpRight size={16} aria-hidden="true" /></span></Link>)}</div></div></section>
    <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow">¿YA TIENES UNA FECHA EN MENTE?</span><h2>Los buenos momentos empiezan aquí.</h2><p>Prepara tu solicitud por WhatsApp. La disponibilidad deberá ser confirmada por el restaurante.</p></div><Link to="/reservas" className="button button-dark">Solicitar una mesa <ArrowUpRight size={20} aria-hidden="true" /></Link></div></section>
  </>;
};
