import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import Layout from '@/components/site/Layout';

const Index = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="relative overflow-hidden">
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
            <Button onClick={() => navigate('/search')} size="lg" className="rounded-full h-14 px-8 text-base gap-2 bg-primary hover:bg-primary/90">
              Найти билеты <Icon name="ArrowRight" size={18} />
            </Button>
          </div>

          <div className="relative animate-scale-in">
            <div className="rounded-[2rem] bg-primary p-10 flex flex-col gap-8 overflow-hidden">
              <div className="flex justify-between items-center">
                <div className="text-gold font-display text-5xl font-700">9¾</div>
                <Icon name="TrainFront" size={48} className="text-gold animate-train-move" />
              </div>
              <div className="space-y-1">
                <div className="text-primary-foreground/50 text-xs tracking-widest uppercase">Направление</div>
                <div className="text-primary-foreground font-display text-4xl font-500">Лондон — Хогвартс</div>
              </div>
              <div className="border-t border-primary-foreground/10 pt-6 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-primary-foreground/40 text-xs uppercase tracking-widest mb-1">Отправление</div>
                  <div className="text-primary-foreground font-display text-2xl font-600">11:00</div>
                  <div className="text-primary-foreground/60 text-sm">Лондон Кингс-Кросс</div>
                </div>
                <div>
                  <div className="text-primary-foreground/40 text-xs uppercase tracking-widest mb-1">Прибытие</div>
                  <div className="text-primary-foreground font-display text-2xl font-600">15:45</div>
                  <div className="text-primary-foreground/60 text-sm">Хогсмид</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/5 rounded-xl px-4 py-3">
                <Icon name="MapPin" size={16} className="text-gold shrink-0" />
                <span className="text-primary-foreground/70 text-sm">Платформа 9¾ · Вагон 7, место 12</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;