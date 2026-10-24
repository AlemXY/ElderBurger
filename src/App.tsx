import { Route, Routes } from "react-router";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Menu } from "./pages/Menu";
import { Team } from "./pages/Team";
import { Gallery } from "./pages/Gallery";
import { Reservations } from "./pages/Reservations";
import { NotFound } from "./pages/NotFound";

export const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="nosotros" element={<About />} />
      <Route path="menu" element={<Menu />} />
      <Route path="equipo" element={<Team />} />
      <Route path="galeria" element={<Gallery />} />
      <Route path="reservas" element={<Reservations />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
