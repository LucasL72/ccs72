import Home from "./pages/Home";
import Photos from "./pages/Photos";
import Contact from "./pages/Contact";
import Blog from "./pages/PBlog";
import BlogID from "./pages/BlogID";
import Devis from "./pages/Devis";
import Cgu from "./pages/Cgu";
import Politiques from "./pages/Politiques";
// Réa
import Réalisations from "./pages/réa/Réalisations";
import Carport from "./pages/réa/Carport";
import Charpente from "./pages/réa/Charpente";
import Pergolas from "./pages/réa/Pergolas";
import Velux from "./pages/réa/Velux";
// Admin
import Admin from "./pages/Admin";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Admin />} />
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="Blog" exact element={<Blog />} />
        <Route path="Blog/:id" exact element={<BlogID />} />
        <Route path="Photos" exact element={<Photos />} />
        <Route path="Contact" exact element={<Contact />} />
        <Route path="Cgu" exact element={<Cgu />} />
        <Route path="Politiques" exact element={<Politiques />} />
        <Route path="Réalisations" exact element={<Réalisations />} />
        <Route path="Carport" exact element={<Carport />} />
        <Route path="Charpente" exact element={<Charpente />} />
        <Route path="Pergolas" exact element={<Pergolas />} />
        <Route path="Velux" exact element={<Velux />} />
        <Route path="Devis" exact element={<Devis />} />
        <Route path="/admin/*" exact element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
