import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CatalogPage } from './pages/CatalogPage';
import { Nav } from "./components/Nav"
import { FavoritesPage } from "./pages/FavoritesPage";
import { CartPage } from "./pages/CartPage";
import { ItemCardPage } from "./pages/ItemCardPage";
import { NotYet } from "./pages/NotYet";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<CatalogPage />} />
        <Route path="/tablets" element={<NotYet />} />
        <Route path="/accessories" element={<NotYet />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/item" element={<ItemCardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
};

export default App;
