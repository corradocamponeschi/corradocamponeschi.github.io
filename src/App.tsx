import { useEffect } from "react";
import { Approach } from "./components/Approach";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Offers } from "./components/Offers";
import { Paths } from "./components/Paths";
import { Projects } from "./components/Projects";

function scrollToHash(hash: string, replace = false) {
  const id = hash.replace("#", "");
  const target = document.getElementById(id);

  if (!target) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });

  if (replace) {
    window.history.replaceState(null, "", hash);
  } else {
    window.history.pushState(null, "", hash);
  }
}

export default function App() {
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
      const hash = anchor?.getAttribute("href");

      if (!hash || hash === "#") {
        return;
      }

      event.preventDefault();
      scrollToHash(hash);
    };

    document.addEventListener("click", handleAnchorClick);

    if (window.location.hash) {
      window.requestAnimationFrame(() => scrollToHash(window.location.hash, true));
    }

    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Approach />
        <Paths />
        <Offers />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
