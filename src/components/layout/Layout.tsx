import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
export const Layout = () => <><ScrollToTop /><Header /><main id="contenido-principal"><Outlet /></main><Footer /></>;
