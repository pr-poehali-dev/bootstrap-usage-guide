import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="container py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground border-t border-border">
    <div className="flex items-center gap-2">
      <span className="font-display text-gold text-xl font-700">9¾</span>
      <span>© 2026 9 и три четверти</span>
    </div>
    <Link to="/contacts" className="hover:text-primary transition-colors">Поддержка</Link>
  </footer>
);

export default Footer;