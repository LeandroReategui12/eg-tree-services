import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LOGO, NAV, PHONE, PHONE_HREF } from "../data/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const isServicesActive = NAV.find((item) => item.children)?.children.some(
    (child) => location.pathname === child.to
  );

  return (
    <header
      className={`site-header${isHome ? " site-header--home" : ""}${scrolled || !isHome ? " is-solid" : ""}${
        menuOpen ? " is-open" : ""
      }`}
      id="top"
    >
      <nav className="nav" aria-label="Primary">
        <div className="container nav__inner">
          <Link className="nav__brand" to="/" aria-label="EG Tree Services LLC home" onClick={closeMenu}>
            <img src={LOGO} alt="EG Tree Services LLC" width="180" height="136" />
          </Link>

          <button
            className="nav__toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
          </button>

          <div className={`nav__menu${menuOpen ? " is-open" : ""}`} id="nav-menu">
            {NAV.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.to}
                    className={`nav__dropdown${isServicesActive ? " is-active" : ""}${
                      servicesOpen ? " is-open" : ""
                    }`}
                  >
                    <NavLink
                      to={item.to}
                      className={({ isActive }) => (isActive || isServicesActive ? "is-active" : undefined)}
                      onClick={(event) => {
                        if (window.matchMedia("(max-width: 960px)").matches) {
                          if (!servicesOpen) {
                            event.preventDefault();
                            setServicesOpen(true);
                            return;
                          }
                        }
                        closeMenu();
                      }}
                    >
                      {item.label}
                    </NavLink>
                    <div className="nav__dropdown-menu">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to + child.label}
                          to={child.to}
                          className={({ isActive }) => (isActive ? "is-active" : undefined)}
                          end={child.to === "/services"}
                          onClick={closeMenu}
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => (isActive ? "is-active" : undefined)}
                  end={item.to === "/"}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              );
            })}
            <a className="btn btn--accent btn--sm" href={PHONE_HREF}>
              {PHONE}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
