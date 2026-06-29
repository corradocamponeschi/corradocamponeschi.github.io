import type { MethodArea } from "../content";

type PathSymbolProps = {
  icon: MethodArea["icon"];
};

export function PathSymbol({ icon }: PathSymbolProps) {
  return (
    <span className={`path-symbol path-symbol--${icon}`} aria-hidden="true">
      {icon === "body" ? (
        <svg viewBox="0 0 64 64">
          <circle cx="32" cy="10" r="5" />
          <path d="M22 25c3-6 6-9 10-9s7 3 10 9" />
          <path d="M32 16v33M23 28c-3 7-3 14 0 21M41 28c3 7 3 14 0 21" />
          <path d="M19 53h26" />
        </svg>
      ) : null}
      {icon === "breath" ? (
        <svg viewBox="0 0 64 64">
          <path d="M10 22c7-5 14-5 22 0s15 5 22 0" />
          <path d="M10 32c7-5 14-5 22 0s15 5 22 0" />
          <path d="M10 42c7-5 14-5 22 0s15 5 22 0" />
        </svg>
      ) : null}
      {icon === "circle" ? (
        <svg viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="23" />
          <circle className="symbol-fill" cx="32" cy="32" r="3.5" />
        </svg>
      ) : null}
      {icon === "heart" ? (
        <svg viewBox="0 0 64 64">
          <path d="M32 52S13 39 13 25c0-8 6-13 13-13 4 0 7 2 10 5 3-3 6-5 10-5 7 0 13 5 13 13 0 14-27 27-27 27Z" />
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

export function EgyptianBirdGlyph() {
  return (
    <svg className="egyptian-bird-glyph" viewBox="0 0 180 120" aria-hidden="true">
      <circle cx="92" cy="22" r="15" />
      <path d="M88 37c21-3 35 5 43 18-13-5-23-4-31 2" />
      <path d="M130 52l20 6-17 8" />
      <circle className="symbol-fill" cx="116" cy="47" r="2.4" />
      <path d="M91 36c-22 8-35 27-34 49 1 13 10 22 24 22 18 0 29-15 28-32-1-14-7-26-18-39Z" />
      <path d="M78 52c-10 14-12 29-5 45 11-7 18-19 20-35" />
      <path d="M79 106v9M96 103v12M70 115h18M88 115h18" />
      <path d="M56 84c-10 5-19 6-28 3 9-4 16-10 23-18" />
    </svg>
  );
}

export function IntimacyGlyph() {
  return (
    <svg className="intimacy-glyph" viewBox="0 0 180 180" aria-hidden="true">
      <path d="M30 116c18-4 33-18 42-40 8 22 23 36 42 40" />
      <path d="M66 120c13-11 21-27 24-49 4 22 12 38 25 49" />
      <circle cx="90" cy="62" r="25" />
      <path d="M90 18v18M90 88v52M54 62H28M152 62h-26" />
      <path d="M53 142h74" />
    </svg>
  );
}
