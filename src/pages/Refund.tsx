import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Layout from '@/components/site/Layout';
import SectionTitle from '@/components/site/SectionTitle';

const Row = ({ label, value, accent }: { label: string; value: string; accent?: boolean }) => (
  <div className="flex justify-between py-2">
    <span className="text-primary-foreground/70">{label}</span>
    <span className={accent ? 'text-gold font-500' : 'text-primary-foreground font-500'}>{value}</span>
  </div>
);

const Refund = () => {
  const [refundPrice, setRefundPrice] = useState('3490');
  const [daysLeft, setDaysLeft] = useState('5');

  const price = Number(refundPrice) || 0;
  const days = Number(daysLeft) || 0;
  const feeRate = days >= 8 ? 0.05 : days >= 1 ? 0.15 : 0.5;
  const fee = Math.round(price * feeRate);
  const refundSum = price - fee;

  return (
    <Layout>
      <section className="container py-20">
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
            <Button className="w-full mt-8 rounded-xl bg-gold text-accent-foreground hover:bg-gold/90 h-12">
              Оформить возврат
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Refund;
