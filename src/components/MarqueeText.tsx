type MarqueeTextProps = {
  items: readonly string[];
  tone?: "light" | "dark";
  separator?: "line" | "dot";
};

export function MarqueeText({ items, tone = "light", separator = "dot" }: MarqueeTextProps) {
  const accessibleText = items.join(separator === "line" ? " — " : " · ");

  const renderSegment = (segment: number) =>
    items.map((item) => (
      <span className="marquee-item" key={`${segment}-${item}`}>
        {item}
        <span className={`marquee-separator marquee-separator--${separator}`} />
      </span>
    ));

  return (
    <div className={`marquee marquee--${tone}`} aria-label={accessibleText}>
      <div className="marquee-track" aria-hidden="true">
        <span className="marquee-segment">{renderSegment(1)}</span>
        <span className="marquee-segment">{renderSegment(2)}</span>
      </div>
    </div>
  );
}
