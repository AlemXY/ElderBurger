/**
 * Valores de demostración. Antes de operar comercialmente,
 * verificar horarios, identidad del negocio y canales autorizados.
 */
export const site = {
  name: "ElderBurger",
  tagline: "Sabor que reúne.",
  email: "", // No publicar direcciones que no pertenezcan al proyecto.
  instagram: "",
  booking: {
    whatsappNumber: "", // Número internacional sin '+' ni separadores; vacío = compartir con contacto elegido.
    openingTime: "12:00",
    lastRequestTime: "21:00",
    maxGuests: 20,
  },
} as const;

export const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/menu", label: "Menú" },
  { href: "/equipo", label: "Equipo" },
  { href: "/galeria", label: "Galería" },
  { href: "/reservas", label: "Reservas" },
] as const;
