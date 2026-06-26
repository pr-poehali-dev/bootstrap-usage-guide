import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import Layout from '@/components/site/Layout';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    { icon: 'Search', title: 'Удобный поиск', text: 'Маршруты, время в пути и цены — всё на одной странице.' },
    { icon: 'RefreshCw', title: 'Возврат и обмен', text: 'Прозрачный калькулятор комиссии без скрытых условий.' },
    { icon: 'ShieldCheck', title: 'Безопасная оплата', text: 'Защищённые платежи и электронные билеты.' },
  ];

  return (
    <Layout>
      {/* Hero */}
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
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => navigate('/search')} size="lg" className="rounded-full h-14 px-8 text-base gap-2 bg-primary hover:bg-primary/90">
                Найти билеты <Icon name="ArrowRight" size={18} />
              </Button>
              <Button onClick={() => navigate('/refund')} size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-primary/20">
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

      {/* Features */}
      <section className="container pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-card rounded-2xl border border-border p-8 hover:border-gold/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center mb-5">
                <Icon name={f.icon} size={22} className="text-gold" />
              </div>
              <h3 className="font-display text-2xl font-600 text-primary mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
