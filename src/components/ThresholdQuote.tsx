type ThresholdQuoteProps = {
  children: string;
};

export function ThresholdQuote({ children }: ThresholdQuoteProps) {
  return (
    <section className="threshold-quote reveal" aria-label="Frase manifesto">
      <p>{children}</p>
    </section>
  );
}
