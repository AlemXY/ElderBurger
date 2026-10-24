/** Carta procedente del prototipo original; precios referenciales en USD, no cotizaciones vigentes. */
export type MenuCategory =
  | "Principales"
  | "Acompañamientos"
  | "Postres"
  | "Bebidas";
export type MenuItem = {
  id: string;
  name: string;
  price: number;
  category: MenuCategory;
  featured?: boolean;
  image?: string;
  description?: string;
};

export const menuCategories: MenuCategory[] = [
  "Principales",
  "Acompañamientos",
  "Postres",
  "Bebidas",
];

export const menuItems: MenuItem[] = [
  {
    id: "clasic",
    name: "Hamburguesa Clásica",
    price: 8.5,
    category: "Principales",
    featured: true,
    image: "/assets/hamburguesa.webp",
    description: "La esencia de una buena hamburguesa, sin complicaciones.",
  },
  {
    id: "doble",
    name: "Hamburguesa Doble con Queso",
    price: 10,
    category: "Principales",
  },
  {
    id: "bbq",
    name: "Hamburguesa BBQ Elder",
    price: 11.5,
    category: "Principales",
  },
  {
    id: "deluxe",
    name: "Combo Elder Deluxe",
    price: 13,
    category: "Principales",
    description: "Con papas y bebida.",
  },
  {
    id: "hotdog",
    name: "Hot Dog Americano",
    price: 7,
    category: "Principales",
  },
  {
    id: "veg",
    name: "Hamburguesa Vegana de Garbanzos",
    price: 9.5,
    category: "Principales",
  },
  {
    id: "crispy",
    name: "Sándwich de Pollo Crispy",
    price: 9,
    category: "Principales",
    featured: true,
    image: "/assets/sandwich.webp",
    description: "Pan suave, texturas crujientes y mucho sabor.",
  },
  {
    id: "truffle",
    name: "Hamburguesa Trufada Gourmet",
    price: 12,
    category: "Principales",
  },
  {
    id: "fries",
    name: "Papas Fritas Clásicas",
    price: 3,
    category: "Acompañamientos",
  },
  {
    id: "onion",
    name: "Aros de Cebolla Crujientes",
    price: 3.5,
    category: "Acompañamientos",
  },
  {
    id: "cheesy",
    name: "Papas con Queso y Tocino",
    price: 4.5,
    category: "Acompañamientos",
  },
  {
    id: "nachos",
    name: "Nachos con Guacamole",
    price: 4,
    category: "Acompañamientos",
  },
  {
    id: "caesar",
    name: "Ensalada César",
    price: 4.5,
    category: "Acompañamientos",
  },
  {
    id: "corn",
    name: "Maíz Asado con Mantequilla",
    price: 3,
    category: "Acompañamientos",
  },
  {
    id: "sweetpotato",
    name: "Camote Frito",
    price: 3.5,
    category: "Acompañamientos",
  },
  { id: "garlic", name: "Pan de Ajo", price: 2.5, category: "Acompañamientos" },
  { id: "brownie", name: "Brownie con Helado", price: 5, category: "Postres" },
  {
    id: "cheesecake",
    name: "Cheesecake de Fresa",
    price: 4.5,
    category: "Postres",
  },
  {
    id: "milkshake",
    name: "Milkshake de Vainilla o Chocolate",
    price: 4,
    category: "Postres",
  },
  {
    id: "apple",
    name: "Tarta de Manzana Caliente",
    price: 4.5,
    category: "Postres",
  },
  { id: "oreo", name: "Helado de Oreo", price: 3.5, category: "Postres" },
  {
    id: "cupcake",
    name: "Cupcake de Red Velvet",
    price: 3,
    category: "Postres",
  },
  {
    id: "churros",
    name: "Churros con Chocolate",
    price: 4,
    category: "Postres",
    featured: true,
    image: "/assets/postre.webp",
    description: "Un final dulce para compartir.",
  },
  {
    id: "maracuya",
    name: "Mousse de Maracuyá",
    price: 4.2,
    category: "Postres",
  },
  {
    id: "soda",
    name: "Refresco (vaso mediano)",
    price: 2,
    category: "Bebidas",
  },
  { id: "lemonade", name: "Limonada Natural", price: 2.5, category: "Bebidas" },
  { id: "beer", name: "Cerveza Artesanal", price: 4, category: "Bebidas" },
  { id: "water", name: "Agua Mineral", price: 1.5, category: "Bebidas" },
  {
    id: "orange",
    name: "Jugo de Naranja Natural",
    price: 3,
    category: "Bebidas",
  },
  { id: "tea", name: "Té Helado de Durazno", price: 2.5, category: "Bebidas" },
  {
    id: "strawberry",
    name: "Malteada de Fresa",
    price: 4,
    category: "Bebidas",
  },
  { id: "coffee", name: "Café Americano", price: 2, category: "Bebidas" },
];

export const featuredItems = menuItems.filter((item) => item.featured);
