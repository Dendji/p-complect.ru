import faker from 'faker'
import { IProduct } from '../components/ProductCard/ProductCard'

export const mockProducts: IProduct[] = [
  {
    id: faker.datatype.uuid(),
    name: 'Герметик ТЕХНОНИКОЛЬ 2К (серый)',
    price: '143 ₽',
    pricePer: '',
    img: 'https://profkomplektaciya.ru/image/cache/188-204/data/Dor-razmetka/ef6b2f9c64b0809472e14b17173ebde0.jpg',
    url: '/catalog/product_id',
    images: [
      'https://profkomplektaciya.ru/image/cache/188-204/data/Dor-razmetka/ef6b2f9c64b0809472e14b17173ebde0.jpg',
      'https://profkomplektaciya.ru/image/cache/188-204/data/MASTIKA/c40e13431fa7f11035cabde98c6b436b.jpg',
      'https://profkomplektaciya.ru/image/cache/188-204/data/Pena/bf0555d1fdea86994479ef0222ef4f11.jpg',
    ],
  },
  {
    id: faker.datatype.uuid(),
    name: 'Клей для рубероида',
    price: '829 ₽',
    pricePer: '',
    img: 'https://profkomplektaciya.ru/image/cache/188-204/data/MASTIKA/c40e13431fa7f11035cabde98c6b436b.jpg',
    url: '/catalog/product_id',
  },
  {
    id: faker.datatype.uuid(),
    name: 'Клей-пена ТЕХНОНИКОЛЬ 500 PROFESSIONAL универсальный',
    price: '1796 ₽',
    pricePer: '',
    img: 'https://profkomplektaciya.ru/image/cache/188-204/data/Pena/bf0555d1fdea86994479ef0222ef4f11.jpg',
    url: '/catalog/product_id',
  },
  {
    id: faker.datatype.uuid(),
    name: 'Краска для дорожной разметки АК-51 (белая)',
    price: '185 ₽',
    pricePer: '',
    img: 'https://profkomplektaciya.ru/image/cache/188-204/data/Dor-razmetka/3afb58353566366af254ce373691f932.jpg',
    url: '/catalog/product_id',
  },
  {
    id: faker.datatype.uuid(),
    name: 'Лак битумный №25',
    price: '2 966₽',
    pricePer: '',
    img: 'https://profkomplektaciya.ru/image/cache/188-204/data/MASTIKA/2c0b6256ee7a6df7219e266511eb58a1.jpg',
    url: '/catalog/product_id',
  },
  {
    id: faker.datatype.uuid(),
    name: 'ЛЕНТА-ГЕРМЕТИК ТЕХНОНИКОЛЬ 15см',
    price: '1 018 ₽',
    pricePer: '',
    img: 'https://profkomplektaciya.ru/image/cache/188-204/data/rulonnaya/7ffa456247ec419e7206d1427a047a30.jpg  ',
    url: '/catalog/product_id',
  },
  {
    id: faker.datatype.uuid(),
    name: 'Мастика кровельная гидроизоляционная ISOBOX',
    pricePer: 'ведро 22кг',
    price: '1 018 ₽',
    img: 'https://profkomplektaciya.ru/image/cache/188-204/data/MASTIKA/487107_1_1.png',
    url: '/catalog/product_id',
  },
  {
    id: faker.datatype.uuid(),
    img: 'https://profkomplektaciya.ru/image/cache/188-204/data/MASTIKA/8ff9ed8ad3135cc0497df293908f10ff.jpg',
    price: '194 ₽',
    pricePer: '10 кг',
    name: 'Мастика кровельная ТехноНИКОЛЬ № 21 ',
    url: '/catalog/product_id',
  },
  {
    id: faker.datatype.uuid(),
    name: 'Мастика кровельная эмульсионная №31',
    price: '109 ₽',
    pricePer: 'ведро 18 кг',
    img: 'https://profkomplektaciya.ru/image/cache/188-204/data/MASTIKA/acd41134b6fddab8434e504dc012d840.jpg',
    url: '/catalog/product_id',
  },
]