import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Landscaping from "./pages/Landscaping";
import LotClearing from "./pages/LotClearing";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import TreeServices from "./pages/TreeServices";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="tree-services" element={<TreeServices />} />
        <Route path="landscaping" element={<Landscaping />} />
        <Route path="lot-clearing" element={<LotClearing />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
