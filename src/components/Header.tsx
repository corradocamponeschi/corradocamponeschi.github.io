import { Instagram, Menu, X, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { instagramLink, navItems, youtubeLink, type PagePath } from "../content";
import brandSymbol from "../assets/corrado-symbol.png";

type HeaderProps = {
  currentPath: PagePath;
};

export function Header({ currentPath }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isOpen);
    return () => document.body.classList.remove("nav-open");
  }, [isOpen]);

  return (
    <header className="site-header">
      <a className="brand" href="/#top" aria-label="Vai all’inizio della homepage">
        <span className="brand-mark" aria-hidden="true">
          <img src={brandSymbol} alt="" />
        </span>
        <span>Corrado Camponeschi</span>
      </a>

      <nav className="desktop-nav" aria-label="Navigazione principale">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={currentPath === item.href ? "page" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <div className="header-social" aria-label="Canali social">
          <a href={instagramLink()} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={19} strokeWidth={1.7} />
          </a>
          <a href={youtubeLink()} target="_blank" rel="noreferrer" aria-label="YouTube">
            <Youtube size={21} strokeWidth={1.7} />
          </a>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className="mobile-panel" aria-hidden={!isOpen}>
        <nav aria-label="Navigazione mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={currentPath === item.href ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-social" aria-label="Canali social">
          <a href={instagramLink()} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href={youtubeLink()} target="_blank" rel="noreferrer" aria-label="YouTube">
            <Youtube size={22} />
          </a>
        </div>
      </div>
    </header>
  );
}
