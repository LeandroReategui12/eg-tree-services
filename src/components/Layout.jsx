import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useReveal } from "../hooks/useReveal";
import { PHONE_HREF } from "../data/site";

export default function Layout() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <a className="call-fab" href={PHONE_HREF} aria-label="Call EG Tree Services">
        Call
      </a>
    </>
  );
}
