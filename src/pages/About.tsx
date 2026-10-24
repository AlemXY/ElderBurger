import {
  ArrowUpRight,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";
import { PageHero } from "../components/ui/PageHero";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const About = () => {
  useDocumentTitle("Nosotros");
  return (
    <>
      <PageHero
        eyebrow="EL CONCEPTO"
        title="Una historia que empieza en la mesa."
        description="ElderBurger nace como una propuesta visual alrededor de la buena comida, la parrilla y el tiempo compartido."
        image="/assets/ambiente-restaurante.webp"
        imageAlt="Interior de restaurante con mesas e iluminación cálida"
      />
      <section className="section">
        <div className="container editorial-grid">
          <div className="editorial-image">
            <img
              src="/assets/restaurante.webp"
              alt="Plato servido en un comedor de restaurante"
              loading="lazy"
            />
          </div>
          <div className="editorial-copy">
            <span className="eyebrow">
              <span className="eyebrow-dot" /> MÁS QUE UN MENÚ
            </span>
            <h2>
              Un lugar en la imaginación. Una experiencia en cada detalle.
            </h2>
            <p>
              Esta versión de ElderBurger representa la identidad de un
              restaurante contemporáneo: una carta variada, fotografías
              apetitosas y una experiencia de navegación clara para quien busca
              explorar el menú o preparar una reserva.
            </p>
            <p>
              La información comercial, el equipo y las imágenes utilizadas son
              ilustrativas mientras no se verifiquen con un establecimiento
              real.
            </p>
            <Link className="button button-primary" to="/menu">
              Conoce la carta <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <div className="three-points">
            <article>
              <Sparkles size={30} />
              <h3>Sabor</h3>
              <p>
                Una identidad pensada alrededor de la parrilla y la cocina que
                se comparte.
              </p>
            </article>
            <article>
              <HeartHandshake size={30} />
              <h3>Hospitalidad</h3>
              <p>
                Una experiencia clara y acogedora desde la primera visita al
                sitio.
              </p>
            </article>
            <article>
              <ShieldCheck size={30} />
              <h3>Claridad</h3>
              <p>
                Las solicitudes se presentan como pendientes; ninguna mesa se
                confirma automáticamente.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
