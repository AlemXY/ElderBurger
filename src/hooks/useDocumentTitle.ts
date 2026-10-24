import { useEffect } from "react";

/** Actualiza el título del documento al navegar entre rutas SPA. */
export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | ElderBurger`;
  }, [title]);
};
