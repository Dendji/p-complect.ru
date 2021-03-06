export interface Nav {
  title: string
  href: string
  submenu?: Nav[]
}

export const FooterNavs: Nav[] = [
  {
    title: 'Теплоизоляция',
    href: '/',
  },
  {
    title: 'Гидроизоляция',
    href: '/',
  },
  {
    title: 'Пленки',
    href: '/',
  },
  {
    title: 'Огнезащита и техническая изоляция',
    href: '/',
  },
  {
    title: 'Монтажные пены',
    href: '/',
  },
  {
    title: 'Все товары',
    href: '/',
  },
]

export const Navs: Nav[] = [
  {
    title: 'Главная',
    href: '/',
  },
  {
    title: 'Производители',
    href: '/brands',
  },
  {
    title: 'Доставка',
    href: '/shipping-and-payments',
  },
  {
    title: 'Клиенты и объекты',
    href: '/portfolio',
  },
  // {
  //   title: 'Статьи',
  //   href: '/blog',
  // },
  {
    title: 'Контакты',
    href: '/contact',
  },
  {
    title: 'О компании',
    href: '/about',
  },
]
