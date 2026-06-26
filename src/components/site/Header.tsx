import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { NAV } from '@/lib/data';

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
            <span className="font-display text-gold text-xl font-700 leading-none flex items-center justify-center w-full h-full text-center">9¾</span>
          </div>
          <div className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">железные дороги</div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.path}
              to={n.path}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                pathname === n.path ? 'text-primary font-600' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button onClick={() => navigate('/account')} variant="ghost" className="rounded-full gap-2">
            <Icon name="User" size={18} />
            <span className="hidden sm:inline">Кабинет</span>
          </Button>
          <Button onClick={() => navigate('/login')} className="rounded-full bg-primary hover:bg-primary/90 hidden sm:flex">
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;