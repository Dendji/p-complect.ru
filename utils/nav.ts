export interface Nav {
  title: string
  href: string
  submenu?: Nav[]
}

export const FooterNavs: Nav[] = [
  {
    title: 'О нас',
    href: '/about',
  },

  {
    title: 'Статьи',
    href: '/blog',
  },
]

export const Navs: Nav[] = [
  {
    title: 'Решения',
    href: '',
    submenu: [],
  },
  {
    title: 'Статьи',
    href: '/blog',
  },
  {
    title: 'Вакансии',
    href: 'https://jobs.dbrain.io/',
  },
  {
    title: 'О нас',
    href: '/about',
  },
]
