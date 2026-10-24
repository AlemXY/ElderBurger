import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
export const NotFound = () => {
  useDocumentTitle("Página no encontrada");
  return (
    <section className="not-found container">
      <span className="eyebrow">ERROR 404</span>
      <h1>Esta página no está en el menú.</h1>
      <p>El enlace que buscas no existe o ha cambiado de dirección.</p>
      <Link to="/" className="button button-primary">
        <ArrowLeft size={18} /> Volver al inicio
      </Link>
    </section>
  );
};
