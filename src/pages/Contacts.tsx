import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Layout from '@/components/site/Layout';

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

const Contacts = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-24 -mb-px">
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
  </Layout>
);

export default Contacts;
