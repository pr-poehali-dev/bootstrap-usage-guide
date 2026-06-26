import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import Layout from '@/components/site/Layout';
import { MY_TICKETS, TRIP_HISTORY, PROFILE } from '@/lib/data';

const TABS = [
  { id: 'tickets', label: 'Мои билеты', icon: 'Ticket' },
  { id: 'profile', label: 'Данные профиля', icon: 'User' },
  { id: 'history', label: 'История поездок', icon: 'History' },
];

const Account = () => {
  const [tab, setTab] = useState('tickets');
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="container py-16">
        {/* Header card */}
        <div className="bg-primary rounded-3xl p-8 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
              <span className="font-display text-gold text-2xl font-700">ГП</span>
            </div>
            <div>
              <div className="font-display text-3xl font-600 text-primary-foreground">{PROFILE.name}</div>
              <div className="text-primary-foreground/60 text-sm">{PROFILE.email}</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="text-primary-foreground/50 text-xs uppercase tracking-widest">Бонусы</div>
              <div className="font-display text-3xl font-600 text-gold">{PROFILE.bonus.toLocaleString('ru')}</div>
            </div>
            <Button onClick={() => navigate('/login')} variant="outline" className="rounded-full border-primary-foreground/20 text-primary-foreground bg-transparent hover:bg-primary-foreground/10">
              Выйти
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm transition-colors ${
                tab === t.id ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-primary'
              }`}
            >
              <Icon name={t.icon} size={16} /> {t.label}
            </button>
          ))}
        </div>

        {/* My tickets */}
        {tab === 'tickets' && (
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            {MY_TICKETS.map((t, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="p-6 flex justify-between items-start">
                  <div>
                    <div className="font-display text-2xl font-600 text-primary mb-1">{t.route}</div>
                    <div className="text-sm text-muted-foreground">{t.date} · {t.train}</div>
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
        )}

        {/* Profile */}
        {tab === 'profile' && (
          <div className="bg-card rounded-2xl border border-border p-8 max-w-2xl animate-fade-in">
            <div className="divide-y divide-border">
              <ProfileRow icon="User" label="Имя" value={PROFILE.name} />
              <ProfileRow icon="Mail" label="Email" value={PROFILE.email} />
              <ProfileRow icon="Phone" label="Телефон" value={PROFILE.phone} />
              <ProfileRow icon="BookUser" label="Паспорт" value={PROFILE.passport} />
            </div>
            <Button className="mt-6 rounded-full bg-primary hover:bg-primary/90">Редактировать данные</Button>
          </div>
        )}

        {/* History */}
        {tab === 'history' && (
          <div className="space-y-4 animate-fade-in">
            {TRIP_HISTORY.map((t, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Icon name="Check" size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-display text-xl font-600 text-primary">{t.route}</div>
                    <div className="text-sm text-muted-foreground">{t.date} · {t.train}</div>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="font-display text-lg font-600 text-primary">{t.price.toLocaleString('ru')} ₽</div>
                  <Button variant="ghost" size="sm" className="rounded-full gap-1 text-muted-foreground">
                    <Icon name="Download" size={16} /> Чек
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

const ProfileRow = ({ icon, label, value }: { icon: string; label: string; value: string }) => (
  <div className="flex items-center gap-4 py-4">
    <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
      <Icon name={icon} size={18} className="text-gold" />
    </div>
    <div className="flex-1">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-primary font-500">{value}</div>
    </div>
  </div>
);

export default Account;
