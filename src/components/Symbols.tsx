import type { Path } from "../content";

type PathSymbolProps = {
  icon: Path["icon"];
};

export function PathSymbol({ icon }: PathSymbolProps) {
  return (
    <span className={`path-symbol path-symbol--${icon}`} aria-hidden="true">
      {icon === "seat" ? (
        <svg viewBox="0 0 64 64">
          <circle cx="32" cy="14" r="7" />
          <path d="M32 23v17M18 46c8-5 20-5 28 0M24 29c-5 6-7 13-6 20M40 29c5 6 7 13 6 20" />
          <path d="M22 38h20" />
        </svg>
      ) : null}
      {icon === "breath" ? (
        <svg viewBox="0 0 64 64">
          <path d="M13 35c7-10 15-10 22 0s14 10 20 0" />
          <path d="M13 25c7-10 15-10 22 0s14 10 20 0" />
          <path d="M20 45c8 5 16 5 24 0" />
          <circle cx="32" cy="32" r="24" />
        </svg>
      ) : null}
      {icon === "circle" ? (
        <svg viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="23" />
          <circle cx="32" cy="12" r="4" />
          <circle cx="50" cy="32" r="4" />
          <circle cx="32" cy="52" r="4" />
          <circle cx="14" cy="32" r="4" />
          <path d="M22 22l20 20M42 22 22 42" />
        </svg>
      ) : null}
      {icon === "heart" ? (
        <svg viewBox="0 0 64 64">
          <path d="M32 52S13 39 13 25c0-8 6-13 13-13 4 0 7 2 10 5 3-3 6-5 10-5 7 0 13 5 13 13 0 14-27 27-27 27Z" />
          <path d="M32 18v25M22 31h20" />
        </svg>
      ) : null}
      {icon === "flame" ? (
        <svg viewBox="0 0 64 64">
          <path d="M34 6c3 11-8 15-8 26 0 8 6 14 14 14s14-6 14-15c0-7-4-12-9-17 1 7-3 10-8 12 1-8-1-14-3-20Z" />
          <path d="M25 41c0 9 7 15 15 15s15-6 15-15" />
        </svg>
      ) : null}
      {icon === "star" ? (
        <svg viewBox="0 0 64 64">
          <path d="M32 7l6 18 19 7-19 7-6 18-6-18-19-7 19-7 6-18Z" />
          <circle cx="32" cy="32" r="8" />
        </svg>
      ) : null}
    </span>
  );
}

export function VerticalGlyph() {
  return (
    <div className="vertical-glyph" aria-hidden="true">
      <span />
      <svg viewBox="0 0 70 220">
        <circle cx="35" cy="24" r="13" />
        <path d="M35 38v36" />
        <path d="M20 74h30l-15 27Z" />
        <path d="M35 101v34" />
        <circle cx="35" cy="156" r="22" />
        <path d="M35 134v44M13 156h44" />
        <path d="M35 178v30" />
      </svg>
      <span />
    </div>
  );
}

export function WingGlyph() {
  return (
    <svg className="wing-glyph" viewBox="0 0 260 72" aria-hidden="true">
      <path d="M10 34h240" />
      <circle cx="130" cy="34" r="16" />
      <path d="M10 34c34 22 71 31 120 31s86-9 120-31" />
      <path d="M34 37c24 12 55 19 96 19s72-7 96-19" />
      <path d="M58 40c22 7 45 10 72 10s50-3 72-10" />
    </svg>
  );
}
