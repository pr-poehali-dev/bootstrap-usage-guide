import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Layout from '@/components/site/Layout';
import SectionTitle from '@/components/site/SectionTitle';
import { ROUTES } from '@/lib/data';

const Field = ({ icon, label, placeholder }: { icon: string; label: string; placeholder: string }) => (
  <div>
    <label className="text-sm text-muted-foreground mb-2 block">{label}</label>
    <div className="relative">
      <Icon name={icon} size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold" />
      <Input placeholder={placeholder} className="h-12 rounded-xl pl-10" />
    </div>
  </div>
);

const Search = () => (
  <Layout>
    <section className="container py-20">
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
          <div key={i} className="bg-card rounded-2xl border border-border p-6 hover:border-gold/50 transition-colors">
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
  </Layout>
);

export default Search;
