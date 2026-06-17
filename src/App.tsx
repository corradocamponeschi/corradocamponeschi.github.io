import { useEffect } from "react";
import { Approach } from "./components/Approach";
import { Audience } from "./components/Audience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Manifesto } from "./components/Manifesto";
import { MarqueeText } from "./components/MarqueeText";
import { Offers } from "./components/Offers";
import { Paths } from "./components/Paths";
import { Projects } from "./components/Projects";
import { ThresholdQuote } from "./components/ThresholdQuote";
import { marqueeTexts, thresholdQuotes } from "./content";

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

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarqueeText text={marqueeTexts.hero} />
        <Manifesto />
        <ThresholdQuote>{thresholdQuotes[0]}</ThresholdQuote>
        <Approach />
        <Paths />
        <MarqueeText text={marqueeTexts.method} tone="dark" />
        <ThresholdQuote>{thresholdQuotes[1]}</ThresholdQuote>
        <Offers />
        <ThresholdQuote>{thresholdQuotes[2]}</ThresholdQuote>
        <Audience />
        <ThresholdQuote>{thresholdQuotes[3]}</ThresholdQuote>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
