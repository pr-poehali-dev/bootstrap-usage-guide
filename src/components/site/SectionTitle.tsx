const SectionTitle = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="mb-10">
    <div className="text-gold text-xs tracking-widest uppercase mb-3">{eyebrow}</div>
    <h2 className="font-display text-4xl md:text-5xl font-600 text-primary">{title}</h2>
  </div>
);

export default SectionTitle;
