import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "../content";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isOpen);
    return () => document.body.classList.remove("nav-open");
  }, [isOpen]);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Corrado Camponeschi home">
        Corrado Camponeschi
      </a>

      <nav className="desktop-nav" aria-label="Navigazione principale">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className="menu-button"
        type="button"
        aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className="mobile-panel" aria-hidden={!isOpen}>
        <nav aria-label="Navigazione mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
