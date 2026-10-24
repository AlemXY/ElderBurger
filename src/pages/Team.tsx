import { PageHero } from '../components/ui/PageHero';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const visuals = [
  { image: '/assets/cocina-1.webp', title: 'Pasión por los detalles', description: 'La precisión y dedicación detrás de una buena experiencia culinaria.' },
  { image: '/assets/cocina-2.webp', title: 'Creatividad en cocina', description: 'Ideas y sabores que mantienen viva la inspiración gastronómica.' },
  { image: '/assets/cocina-3.webp', title: 'El oficio de compartir', description: 'Una cocina que representa esfuerzo, equipo y hospitalidad.' },
];

export const Team = () => {
  useDocumentTitle('Equipo');
  return <><PageHero eyebrow="DETRÁS DEL CONCEPTO" title="La pasión también se cocina." description="Una mirada visual al oficio gastronómico que inspira la identidad de ElderBurger." />
    <section className="section"><div className="container"><p className="content-notice">Las fotografías de esta sección son referenciales; no representan personal verificado de un establecimiento.</p><div className="team-grid">{visuals.map(card=><article className="team-card" key={card.title}><div className="team-image"><img src={card.image} alt={`Fotografía ilustrativa de cocina: ${card.title.toLowerCase()}`} loading="lazy" /></div><h2>{card.title}</h2><p>{card.description}</p></article>)}</div></div></section>
  </>;
};
