export const NAV = [
  { path: '/', label: 'Главная' },
  { path: '/search', label: 'Поиск билетов' },
  { path: '/account', label: 'Мои билеты' },
  { path: '/refund', label: 'Возврат и обмен' },
  { path: '/contacts', label: 'Контакты' },
];

export const ROUTES = [
  { from: 'Москва', to: 'Санкт-Петербург', time: '4 ч 05 мин', train: '«Сапсан» 758А', price: 3490, dep: '06:50', arr: '10:55' },
  { from: 'Москва', to: 'Казань', time: '11 ч 30 мин', train: '«Премиум» 024Г', price: 2870, dep: '23:55', arr: '11:25' },
  { from: 'Санкт-Петербург', to: 'Сочи', time: '38 ч 12 мин', train: '«Северная Пальмира» 035А', price: 5240, dep: '15:20', arr: '05:32' },
  { from: 'Москва', to: 'Нижний Новгород', time: '3 ч 35 мин', train: '«Ласточка» 712Я', price: 1690, dep: '08:15', arr: '11:50' },
  { from: 'Екатеринбург', to: 'Москва', time: '25 ч 40 мин', train: '«Урал» 016Е', price: 4120, dep: '17:08', arr: '18:48' },
];

export const MY_TICKETS = [
  { route: 'Москва → Санкт-Петербург', date: '14 июля 2026', seat: 'Вагон 7, место 12', status: 'Оплачен', price: 3490, train: '«Сапсан» 758А' },
  { route: 'Казань → Москва', date: '02 августа 2026', seat: 'Вагон 3, место 04', status: 'Бронь', price: 2870, train: '«Премиум» 023Г' },
];

export const TRIP_HISTORY = [
  { route: 'Москва → Сочи', date: '12 мая 2026', price: 5240, train: '«Северная Пальмира» 035А' },
  { route: 'Санкт-Петербург → Москва', date: '28 марта 2026', price: 3490, train: '«Сапсан» 757А' },
  { route: 'Москва → Казань', date: '04 февраля 2026', price: 2780, train: '«Премиум» 024Г' },
];

export const PROFILE = {
  name: 'Гарри Поттер',
  email: 'h.potter@9-34.ru',
  phone: '+7 900 123 45 67',
  passport: '45 09 ●●●●●●',
  bonus: 2340,
};
