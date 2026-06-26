import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NAV = [
  { id: 'home', label: 'Главная' },
  { id: 'search', label: 'Поиск билетов' },
  { id: 'tickets', label: 'Мои билеты' },
  { id: 'refund', label: 'Возврат и обмен' },
  { id: 'contacts', label: 'Контакты' },
];

const ROUTES = [
  { from: 'Москва', to: 'Санкт-Петербург', time: '4 ч 05 мин', train: '«Сапсан» 758А', price: 3490, dep: '06:50', arr: '10:55' },
  { from: 'Москва', to: 'Казань', time: '11 ч 30 мин', train: '«Премиум» 024Г', price: 2870, dep: '23:55', arr: '11:25' },
  { from: 'Санкт-Петербург', to: 'Сочи', time: '38 ч 12 мин', train: '«Северная Пальмира» 035А', price: 5240, dep: '15:20', arr: '05:32' },
];

const MY_TICKETS = [
  { route: 'Москва → Санкт-Петербург', date: '14 июля 2026', seat: 'Вагон 7, место 12', status: 'Оплачен', price: 3490 },
  { route: 'Казань → Москва', date: '02 августа 2026', seat: 'Вагон 3, место 04', status: 'Бронь', price: 2870 },
];

const Index = () => {
  const [active, setActive] = useState('home');
  const [refundPrice, setRefundPrice] = useState('3490');
  const [daysLeft, setDaysLeft] = useState('5');

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const price = Number(refundPrice) || 0;
  const days = Number(daysLeft) || 0;
  const feeRate = days >= 8 ? 0.05 : days >= 1 ? 0.15 : 0.5;
  const fee = Math.round(price * feeRate);
  const refundSum = price - fee;

  return (
    <div className="min-h-screen bg-background grain text-foreground font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
              <span className="font-display text-gold text-2xl font-700 leading-none">9¾</span>
            </div>
            <div className="text-left leading-tight">
              <div className="font-display text-2xl font-600 text-primary">9 и три четверти</div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">железные дороги</div>
            </div>
          </button>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  active === n.id ? 'text-primary font-600' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('tickets')} variant="ghost" className="rounded-full gap-2">
            <Icon name="User" size={18} />
            <span className="hidden sm:inline">Кабинет</span>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="container py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gold mb-6">
              <span className="w-8 h-px bg-gold" /> Платформа 9¾
            </div>
            <h1 className="font-display text-6xl md:text-7xl font-600 leading-[0.95] text-primary mb-6">
              Поезд уже<br />
              ждёт вас на<br />
              <span className="text-gold italic">платформе.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-10">
              Найдите идеальный маршрут, забронируйте место и отправляйтесь в путешествие. Чистый сервис без суеты.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollTo('search')} size="lg" className="rounded-full h-14 px-8 text-base gap-2 bg-primary hover:bg-primary/90">
                Найти билеты <Icon name="ArrowRight" size={18} />
              </Button>
              <Button onClick={() => scrollTo('refund')} size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-primary/20">
                Калькулятор возврата
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-[2rem] bg-primary p-10 flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-start">
                <div className="text-gold font-display text-5xl font-700">9¾</div>
                <Icon name="TrainFront" size={48} className="text-gold animate-train-move" />
              </div>
              <div className="space-y-1">
                <div className="text-primary-foreground/50 text-xs tracking-widest uppercase">Направление</div>
                <div className="text-primary-foreground font-display text-4xl font-500">Лондон — Хогвартс</div>
                <div className="flex items-center gap-3 text-primary-foreground/70 text-sm pt-2">
                  <Icon name="Clock" size={16} className="text-gold" /> Отправление 11:00
                  <Icon name="MapPin" size={16} className="text-gold ml-2" /> Платформа 9¾
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section id="search" className="container py-20">
        <SectionTitle eyebrow="Поиск" title="Найдите свой маршрут" />
        <div className="bg-card rounded-3xl border border-border p-6 md:p-8 shadow-sm mb-10">
          <div className="grid md:grid-cols-4 gap-4">
            <Field icon="MapPin" label="Откуда" placeholder="Москва" />
            <Field icon="MapPin" label="Куда" placeholder="Санкт-Петербург" />
            <Field icon="Calendar" label="Дата" placeholder="14 июля 2026" />
            <div className="flex items-end">
              <Button className="w-full h-12 rounded-xl gap-2 bg-gold text-accent-foreground hover:bg-gold/90">
                <Icon name="Search" size={18} /> Найти
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {ROUTES.map((r, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border p-6 hover:border-gold/50 transition-colors group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="font-display text-2xl font-600 text-primary">{r.dep}</div>
                    <div className="text-xs text-muted-foreground">{r.from}</div>
                  </div>
                  <div className="flex flex-col items-center text-muted-foreground min-w-[120px]">
                    <span className="text-xs">{r.time}</span>
                    <div className="w-full flex items-center gap-1 my-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span className="flex-1 h-px bg-border" />
                      <Icon name="TrainFront" size={14} className="text-gold" />
                      <span className="flex-1 h-px bg-border" />
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    </div>
                    <span className="text-[11px]">{r.train}</span>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-2xl font-600 text-primary">{r.arr}</div>
                    <div className="text-xs text-muted-foreground">{r.to}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="font-display text-3xl font-600 text-primary">{r.price.toLocaleString('ru')} ₽</div>
                    <div className="text-xs text-muted-foreground">за место</div>
                  </div>
                  <Button className="rounded-full px-7 h-12 bg-primary hover:bg-primary/90">Выбрать</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* My tickets */}
      <section id="tickets" className="bg-secondary py-20">
        <div className="container">
          <SectionTitle eyebrow="Личный кабинет" title="Мои билеты и бронирования" />
          <div className="grid md:grid-cols-2 gap-6">
            {MY_TICKETS.map((t, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="p-6 flex justify-between items-start">
                  <div>
                    <div className="font-display text-2xl font-600 text-primary mb-1">{t.route}</div>
                    <div className="text-sm text-muted-foreground">{t.date}</div>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full font-500 ${
                    t.status === 'Оплачен' ? 'bg-gold/15 text-gold' : 'bg-muted text-muted-foreground'
                  }`}>{t.status}</span>
                </div>
                <div className="border-t border-dashed border-border" />
                <div className="p-6 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Armchair" size={16} className="text-gold" /> {t.seat}
                  </div>
                  <div className="font-display text-xl font-600 text-primary">{t.price.toLocaleString('ru')} ₽</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refund calculator */}
      <section id="refund" className="container py-20">
        <SectionTitle eyebrow="Возврат и обмен" title="Калькулятор комиссии" />
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-card rounded-3xl border border-border p-8 space-y-6">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Стоимость билета, ₽</label>
              <Input value={refundPrice} onChange={(e) => setRefundPrice(e.target.value)} type="number" className="h-12 rounded-xl text-lg" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Дней до отправления</label>
              <Input value={daysLeft} onChange={(e) => setDaysLeft(e.target.value)} type="number" className="h-12 rounded-xl text-lg" />
            </div>
            <div className="text-xs text-muted-foreground space-y-1 pt-2">
              <p>• 8 дней и более — комиссия 5%</p>
              <p>• от 1 до 7 дней — комиссия 15%</p>
              <p>• менее суток — комиссия 50%</p>
            </div>
          </div>

          <div className="bg-primary rounded-3xl p-8 text-primary-foreground">
            <div className="text-gold text-xs tracking-widest uppercase mb-6">Расчёт возврата</div>
            <Row label="Стоимость билета" value={`${price.toLocaleString('ru')} ₽`} />
            <Row label={`Комиссия (${Math.round(feeRate * 100)}%)`} value={`− ${fee.toLocaleString('ru')} ₽`} accent />
            <div className="border-t border-primary-foreground/15 my-5" />
            <div className="flex justify-between items-end">
              <span className="text-primary-foreground/70">К возврату</span>
              <span className="font-display text-5xl font-600 text-gold">{refundSum.toLocaleString('ru')} ₽</span>
            </div>
            <Button className="w-full mt-8 h-13 rounded-xl bg-gold text-accent-foreground hover:bg-gold/90 h-12">
              Оформить возврат
            </Button>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="bg-primary text-primary-foreground py-20">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-gold text-xs tracking-widest uppercase mb-4">Контакты и поддержка</div>
            <h2 className="font-display text-5xl font-600 mb-6">Всегда на связи</h2>
            <p className="text-primary-foreground/70 max-w-md mb-8">
              Наша служба поддержки работает круглосуточно. Поможем с билетами, возвратом и любым вопросом в пути.
            </p>
            <div className="space-y-4">
              <Contact icon="Phone" label="8 800 975 9999" sub="Бесплатно по России" />
              <Contact icon="Mail" label="help@9-34.ru" sub="Ответим в течение часа" />
              <Contact icon="MessageCircle" label="Онлайн-чат" sub="Среднее время ответа — 2 минуты" />
            </div>
          </div>
          <div className="bg-primary-foreground/5 rounded-3xl border border-primary-foreground/10 p-8 space-y-4">
            <h3 className="font-display text-2xl font-500">Напишите нам</h3>
            <Input placeholder="Ваше имя" className="h-12 rounded-xl bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" />
            <Input placeholder="Email" className="h-12 rounded-xl bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" />
            <textarea placeholder="Сообщение" rows={4} className="w-full rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 p-3 resize-none" />
            <Button className="w-full h-12 rounded-xl bg-gold text-accent-foreground hover:bg-gold/90">Отправить</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="font-display text-gold text-xl font-700">9¾</span>
          <span>© 2026 9 и три четверти</span>
        </div>
        <div className="flex gap-6">
          <button className="hover:text-primary transition-colors">Оферта</button>
          <button className="hover:text-primary transition-colors">Конфиденциальность</button>
        </div>
      </footer>
    </div>
  );
};

const SectionTitle = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="mb-10">
    <div className="text-gold text-xs tracking-widest uppercase mb-3">{eyebrow}</div>
    <h2 className="font-display text-4xl md:text-5xl font-600 text-primary">{title}</h2>
  </div>
);

const Field = ({ icon, label, placeholder }: { icon: string; label: string; placeholder: string }) => (
  <div>
    <label className="text-sm text-muted-foreground mb-2 block">{label}</label>
    <div className="relative">
      <Icon name={icon} size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" />
      <Input placeholder={placeholder} className="h-12 rounded-xl pl-10" />
    </div>
  </div>
);

const Row = ({ label, value, accent }: { label: string; value: string; accent?: boolean }) => (
  <div className="flex justify-between py-2">
    <span className="text-primary-foreground/70">{label}</span>
    <span className={accent ? 'text-gold font-500' : 'text-primary-foreground font-500'}>{value}</span>
  </div>
);

const Contact = ({ icon, label, sub }: { icon: string; label: string; sub: string }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
      <Icon name={icon} size={20} className="text-gold" />
    </div>
    <div>
      <div className="font-500 text-lg">{label}</div>
      <div className="text-sm text-primary-foreground/60">{sub}</div>
    </div>
  </div>
);

export default Index;
