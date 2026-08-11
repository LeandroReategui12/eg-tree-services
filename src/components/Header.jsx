import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { EMAIL_HREF, EMAIL, HOURS, LOGO, NAV, PHONE, PHONE_HREF, ADDRESS } from "../data/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const isServicesActive = NAV.find((item) => item.children)?.children.some(
    (child) => location.pathname === child.to
  );

  return (
    <header className="site-header" id="top">
      <div className="topbar">
        <div className="container topbar__inner">
          <a href={EMAIL_HREF}>{EMAIL}</a>
          <span>{HOURS}</span>
          <a href={PHONE_HREF}>{PHONE}</a>
          <span>{ADDRESS}</span>
        </div>
      </div>

      <nav className="nav" aria-label="Primary">
        <div className="container nav__inner">
          <Link className="nav__brand" to="/" aria-label="EG Tree Services LLC home" onClick={closeMenu}>
            <img src={LOGO} alt="EG Tree Services LLC" width="180" height="119" />
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
              Call Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
