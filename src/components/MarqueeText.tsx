type MarqueeTextProps = {
  text: string;
  tone?: "light" | "dark";
};

export function MarqueeText({ text, tone = "light" }: MarqueeTextProps) {
  return (
    <div className={`marquee marquee--${tone}`} aria-label={text}>
      <div className="marquee-track" aria-hidden="true">
        <span className="marquee-segment">{text}</span>
        <span className="marquee-segment">{text}</span>
      </div>
    </div>
  );
}
