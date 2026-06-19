import { useEffect, useMemo, useState } from "react";
import { Approach } from "./components/Approach";
import { Audience } from "./components/Audience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { InternalPage } from "./components/InternalPage";
import { Manifesto } from "./components/Manifesto";
import { MarqueeText } from "./components/MarqueeText";
import { Offers } from "./components/Offers";
import { Paths } from "./components/Paths";
import { Projects } from "./components/Projects";
import { ThresholdQuote } from "./components/ThresholdQuote";
import { internalPages, marqueeTexts, navItems, thresholdQuotes, type PagePath } from "./content";

const routePaths: PagePath[] = ["/", ...navItems.map((item) => item.href)];
const routeSet = new Set<string>(routePaths);

function normalizePath(pathname: string): PagePath {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return routeSet.has(path) ? (path as PagePath) : "/";
}

function readInitialPath(): PagePath {
  const redirectedPath = window.sessionStorage.getItem("spa-redirect");

  if (redirectedPath) {
    window.sessionStorage.removeItem("spa-redirect");
    window.history.replaceState(null, "", redirectedPath);
  }

  return normalizePath(window.location.pathname);
}

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
  const [route, setRoute] = useState<PagePath>(readInitialPath);
  const currentPage = useMemo(() => (route === "/" ? null : internalPages[route]), [route]);

  useEffect(() => {
    const handlePopState = () => setRoute(normalizePath(window.location.pathname));

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    document.title = currentPage
      ? `${currentPage.title} | Corrado Camponeschi`
      : "Corrado Camponeschi | Sessualità autentica, corpo cosciente e maturità emotiva";
  }, [currentPage]);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [route]);

  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      const href = anchor?.getAttribute("href");

      if (!anchor || !href || href === "#" || anchor.target || event.metaKey || event.ctrlKey) {
        return;
      }

      if (href.startsWith("#")) {
        event.preventDefault();
        scrollToHash(href);
        return;
      }

      const url = new URL(anchor.href);
      const candidatePath = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, "") : url.pathname;

      if (url.origin !== window.location.origin || !routeSet.has(candidatePath)) {
        return;
      }

      event.preventDefault();
      const normalizedPath = candidatePath as PagePath;
      window.history.pushState(null, "", normalizedPath);
      setRoute(normalizedPath);
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
      <Header currentPath={route} />
      <main>
        {route === "/" ? (
          <>
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
          </>
        ) : (
          <InternalPage route={route} />
        )}
      </main>
      <Footer />
    </>
  );
}
