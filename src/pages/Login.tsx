import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Login = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen grid lg:grid-cols-2 font-sans">
      {/* Left visual */}
      <div className="relative bg-primary text-primary-foreground p-12 hidden lg:flex flex-col justify-between overflow-hidden">
        <Link to="/" className="flex items-center gap-3 relative z-10">
          <div className="w-11 h-11 rounded-full bg-gold/20 flex items-center justify-center">
            <span className="font-display text-gold text-2xl font-700 leading-none">9¾</span>
          </div>
          <div className="font-display text-2xl font-600">9 ¾</div>
        </Link>

        <div className="relative z-10">
          <Icon name="TrainFront" size={64} className="text-gold mb-6 animate-train-move" />
          <h1 className="font-display text-5xl font-600 leading-tight mb-4">
            Билет в путешествие<br />начинается здесь.
          </h1>
          <p className="text-primary-foreground/60 max-w-sm">
            Войдите в личный кабинет, чтобы управлять билетами, копить бонусы и видеть историю поездок.
          </p>
        </div>

        <div className="text-primary-foreground/40 text-sm relative z-10">© 2026 9 и три четверти</div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
      </div>

      {/* Right form */}
      <div className="bg-background grain flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md animate-fade-in">
          <Link to="/" className="lg:hidden flex items-center gap-2 mb-8 text-muted-foreground">
            <Icon name="ArrowLeft" size={18} /> На главную
          </Link>

          <div className="text-gold text-xs tracking-widest uppercase mb-3">
            {mode === 'login' ? 'Вход' : 'Регистрация'}
          </div>
          <h2 className="font-display text-4xl font-600 text-primary mb-8">
            {mode === 'login' ? 'С возвращением' : 'Создать аккаунт'}
          </h2>

          <div className="space-y-4">
            {mode === 'register' && (
              <Field icon="User" placeholder="Имя и фамилия" />
            )}
            <Field icon="Mail" placeholder="Email" type="email" />
            <Field icon="Lock" placeholder="Пароль" type="password" />
            {mode === 'register' && (
              <Field icon="Lock" placeholder="Повторите пароль" type="password" />
            )}

            {mode === 'login' && (
              <div className="flex justify-end">
                <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Забыли пароль?
                </button>
              </div>
            )}

            <Button onClick={() => navigate('/account')} className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-base">
              {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
            </Button>

            <div className="flex items-center gap-4 py-2">
              <span className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground">или</span>
              <span className="flex-1 h-px bg-border" />
            </div>

            <Button variant="outline" className="w-full h-12 rounded-xl gap-2 border-border">
              <Icon name="Smartphone" size={18} className="text-gold" /> Войти по номеру телефона
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            {mode === 'login' ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}{' '}
            <button
              onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
              className="text-gold font-500 hover:underline"
            >
              {mode === 'login' ? 'Зарегистрироваться' : 'Войти'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

const Field = ({ icon, placeholder, type = 'text' }: { icon: string; placeholder: string; type?: string }) => (
  <div className="relative">
    <Icon name={icon} size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" />
    <Input type={type} placeholder={placeholder} className="h-12 rounded-xl pl-10" />
  </div>
);

export default Login;