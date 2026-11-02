import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [["About", "about"], ["Skills", "skills"], ["Experience", "experience"], ["Portfolio", "projects"]] as const;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isProjectsPage = useLocation().pathname.endsWith("/projects");
  const sectionLink = (id: string) => isProjectsPage ? `/#${id}` : `#${id}`;

  return (
    <header className={`site-header${menuOpen ? " site-header--menu-open" : ""}`}>
      <div className="site-header__inner">
        <Link className="brand" to="/" aria-label="Karthi C, home"><span>KC</span><i>.</i></Link>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav className={`site-nav${menuOpen ? " site-nav--open" : ""}`} aria-label="Main navigation">
          {links.map(([label, id]) => <a key={id} href={sectionLink(id)} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="site-nav__contact" href={sectionLink("contact")} onClick={() => setMenuOpen(false)}>Contact me <span>↗</span></a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
