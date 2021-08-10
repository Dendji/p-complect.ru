# GET /init

## Response

```json
{
  "logoLight": "https://p-complect.ru/media/24123",
  "logoDark": "https://p-complect.ru/media/24123",
  "search": [
    "утеплитель",
    "мастика",
    "праймер",
    "битум",
    "геотекстиль",
    "воронка",
    "аэратор",
    "мембрана",
    "пена",
    "герметик",
    "техноэласт",
    "бикрост",
    "унифлекс",
    "плантер",
    "pir"
  ],
  "headerNav": {
    "items": [
      {
        "title": "Главная",
        "href": "/"
      },
      {
        "title": "Доставка и оплата",
        "href": "/shipping-and-payments"
      }
    ]
  },
  "footerNav": [
    {
      "items": [
        {
          "title": "Теплоизоляция",
          "href": "/categories/teplo"
        },
        {
          "title": "Гидроизоляция",
          "href": "/categories/hydro"
        }
      ]
    },
    {
      "items": [
        {
          "title": "Политика конфиденциальности",
          "href": "/policy"
        },
        {
          "title": "Пользовательское соглашение",
          "href": "/agreement"
        }
      ]
    }
  ],
  "categories": [
    {
      "id": "1",
      "name": "Теплоизоляция",
      "subcategories": [
        {
          "id": "7",
          "name": "Комплектующие к Огнезащита и техническая изоляция"
        }
      ]
    },
    {
      "id": "2",
      "name": "Гидроизоляция",
      "subcategories": [
        {
          "id": "8",
          "name": "Комплектующие к Огнезащита и техническая изоляция"
        }
      ]
    },
    {
      "id": "3",
      "name": "Пленки",
      "subcategories": [
        {
          "id": "9",
          "name": "Комплектующие к Огнезащита и техническая изоляция"
        }
      ]
    },
    {
      "id": "4",
      "name": "Монтажные пены",
      "subcategories": [
        {
          "id": "10",
          "name": "Комплектующие к Огнезащита и техническая изоляция"
        }
      ]
    },
    {
      "id": "5",
      "name": "Огнезащита и техническая изоляция",
      "subcategories": [
        {
          "id": "6",
          "name": "Комплектующие к Огнезащита и техническая изоляция"
        }
      ]
    }
  ],

  "contacts": [
    {
      "title": "Время работы",
      "items": [
        "пн-чт <strong>9:00 – 18:00</strong>",
        "пт <strong>9:00 – 17:00</strong>"
      ]
    },
    {
      "title": "Позвонить",
      "items": ["+7 495 970 55 05", "+7 916 825 03 03"]
    },
    {
      "title": "Адрес",
      "items": ["Московская обл.,", "г. Люберцы, ул. Кирова, д. 20А"]
    }
  ]
}
```

# GET /pages/shipping-and-payments

## Response

```json
{
  "title": "Доставка и оплата",
  "items": [
    {
      "icon": "https://p-complect.ru/media/24123", // svg
      "title": "Оплата", // svg
      "content": "<p>
          Оплата товара осуществляется только в рублях по безналичному расчету.
        </p>
        <p>
          Основанием для оплаты товара является счет на оплату, выставленный по
          Вашему заказу. Фактом оплаты считается поступление денежных средств на
          наш расчетный счет.
        </p>
        <p>
          Реквизиты для оплаты <br />
          Карточка предприятия ООО «ПРОФКОМПЛЕКТАЦИЯ»:
          <br />
          ИНН 5027269223 <br />
          БИК 044525999 <br />
          КПП 502701001 <br />
          Р/с 40702810801500026203 <br />
          Банк Филиал Точка ПАО Банка «Финансовая Корпорация Открытие»
        </p>" // WYSIWYG
    }
  ]
}
```

# GET /pages/portfolio

## Response

```json
{
  "clients": {
    "title": "С кем мы работаем",
    "items": [
      {
        "name": "Жилые комплексы",
        "image": {
          "original": "https//p-complect.ru/media/48823293147",
          "medium": "https//p-complect.ru/media/48823293147",
          "large": "https//p-complect.ru/media/48823293147",
          "thumbnail": "https//p-complect.ru/media/48823293147"
        }
      }
    ]
  },
  "objects": {
    "tags": ["Все", "Жилые комплексы", "Торговые центры"],
    "items": [
      {
        "name": "г. Люберцы ул. Попова 19",
        "tag": "Жилые комплексы",
        "content": "Начали монтаж вентилируемого фасада г. Люберцы, ул. Попова 19, по програме ФКР На объекте смонтирована подсистема и выполнено утепление фасада, ведётся монтаж керамогранита. Используемые материалы: подсистема Doksal, утепление Baswool ВЕНТ ФАСАД т. 50+50 мм, керамогранит Грани Таганая.",
        "images": [
          {
            "original": "https//p-complect.ru/media/48823293147",
            "medium": "https//p-complect.ru/media/48823293147",
            "large": "https//p-complect.ru/media/48823293147",
            "thumbnail": "https//p-complect.ru/media/48823293147"
          },
          {
            "original": "https//p-complect.ru/media/48823293147",
            "medium": "https//p-complect.ru/media/48823293147",
            "large": "https//p-complect.ru/media/48823293147",
            "thumbnail": "https//p-complect.ru/media/48823293147"
          }
        ]
      }
    ]
  }
}
```

# GET /pages/about

## Response

```json
{
  "title": "О компании",
  "about": {
    "title": "ООО ПРОФКОМПЛЕКТАЦИЯ",
    "image": {
      "original": "https//p-complect.ru/media/48823293147",
      "medium": "https//p-complect.ru/media/48823293147",
      "large": "https//p-complect.ru/media/48823293147",
      "thumbnail": "https//p-complect.ru/media/48823293147"
    },
    "content": "Крупный и надежный поставщик строительно-отделочных материалов, имеющий дилерские соглашения с известными российскими и зарубежными производителями. Мы организуем комплексные поставки стройматериалов по всей стране, каждый год обеспечивая ими сотни строительных объектов. Являемся участниками тендеров на строительство и ремонт. Нашим клиентам доступен широкий ассортимент высококачественной продукции, достойное сервисное обслуживание и приятные цены. Мы обеспечиваем лучшие условия как и для строительства крупного складского комплекса, так и для простого утепления стен жилого дома."
  },
  "certificates": {
    "title": "Благодарственные письма",
    "images": [
      {
        "original": "https//p-complect.ru/media/48823293147",
        "medium": "https//p-complect.ru/media/48823293147",
        "large": "https//p-complect.ru/media/48823293147",
        "thumbnail": "https//p-complect.ru/media/48823293147"
      }
    ]
  },
  "benefits": {
    "title": "О концепции",
    "items": [
      {
        "icon": "https//p-complect.ru/media/48823293147",
        "title": "Каждому новому клиенту",
        "content": "«ПРОФКОМПЛЕКТАЦИЯ» предлагает продукцию нескольких надежных производителей в разных ценовых сегментах — от эконом до премиум-класса. Вы гарантированно сможете подобрать строительные и отделочные материалы под конкретную цель и бюджет."
      }
    ]
  },
  "extra": {
    "title": "Вы занимаетесь строительством профессионально?",
    "content": "«ПРОФКОМПЛЕКТАЦИЯ» предлагает продукцию нескольких надежных производителей в разных ценовых сегментах — от эконом до премиум-класса. Вы гарантированно сможете подобрать строительные и отделочные материалы под конкретную цель и бюджет.",
    "image": {
      "original": "https//p-complect.ru/media/48823293147",
      "medium": "https//p-complect.ru/media/48823293147",
      "large": "https//p-complect.ru/media/48823293147",
      "thumbnail": "https//p-complect.ru/media/48823293147"
    }
  }
}
```

# GET /pages/contact

## Response

```json
{
  "title": "Связаться",
  "map": "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A497006510b013bd96dcbd24921b9cb3f5ab5c7841beefa016a5b9c26b2bfd322&amp;width=100%25&amp;height=537&amp;lang=ru_RU&amp;scroll=false",
  "items": [
    {
      "title": "Время работы",
      "items": [
        "пн-чт <strong>9:00 – 18:00</strong>",
        "пт <strong>9:00 – 17:00</strong>"
      ],
      "type": "text"
    },
    {
      "title": "Позвонить",
      "items": ["+7 495 970 55 05", "+7 916 825 03 03"],
      "type": "tel"
    },
    {
      "title": "Адрес",
      "items": ["Московская обл.,", "г. Люберцы, ул. Кирова, д. 20А"],
      "type": "map",
      "link": "https://yandex.ru/maps/-/CCUYJ0wDPB"
    }
  ]
}
```

# GET /pages/home

## Response

```json
{
  "feedback": {
    "title": "Отзывы клиентов",
    "items": [
      {
        "name": "John Doe",
        "content": "Время работы",
        "href": "Время работы",
        "avatar": {
          "original": "https//p-complect.ru/media/48823293147",
          "medium": "https//p-complect.ru/media/48823293147",
          "large": "https//p-complect.ru/media/48823293147",
          "thumbnail": "https//p-complect.ru/media/48823293147"
        }
      },
      {
        "name": "John Doe",
        "content": "Время работы",
        "href": "Время работы",
        "avatar": {
          "original": "https//p-complect.ru/media/48823293147",
          "medium": "https//p-complect.ru/media/48823293147",
          "large": "https//p-complect.ru/media/48823293147",
          "thumbnail": "https//p-complect.ru/media/48823293147"
        }
      }
    ]
  },
  "distribution": {
    "title": "Мы являемся дистрибьютором компании ТЕХНОНИКОЛЬ",
    "content": "Так же можем предложить материалы для внутренней отделки, следующих производителей: Кнауф, Юнис, Волма, Седрус, Вебер Ветонит и другие... За более подробной информацией, просим обращаться в отдел продаж по телефонам.",
    "image": {
      "original": "https//p-complect.ru/media/48823293147",
      "medium": "https//p-complect.ru/media/48823293147",
      "large": "https//p-complect.ru/media/48823293147",
      "thumbnail": "https//p-complect.ru/media/48823293147"
    },
    "certificate": {
      "original": "https//p-complect.ru/media/48823293147",
      "medium": "https//p-complect.ru/media/48823293147",
      "large": "https//p-complect.ru/media/48823293147",
      "thumbnail": "https//p-complect.ru/media/48823293147"
    }
  },
  "brands": {
    "title": "Также дистрибьюторы следующих брендов",
    "content": "Так же можем предложить материалы для внутренней отделки, следующих производителей: Кнауф, Юнис, Волма, Седрус, Вебер Ветонит и другие... За более подробной информацией, просим обращаться в отдел продаж по телефонам.",
    "items": [
      {
        "original": "https//p-complect.ru/media/48823293147",
        "medium": "https//p-complect.ru/media/48823293147",
        "large": "https//p-complect.ru/media/48823293147",
        "thumbnail": "https//p-complect.ru/media/48823293147"
      },
      {
        "original": "https//p-complect.ru/media/48823293147",
        "medium": "https//p-complect.ru/media/48823293147",
        "large": "https//p-complect.ru/media/48823293147",
        "thumbnail": "https//p-complect.ru/media/48823293147"
      },
      {
        "original": "https//p-complect.ru/media/48823293147",
        "medium": "https//p-complect.ru/media/48823293147",
        "large": "https//p-complect.ru/media/48823293147",
        "thumbnail": "https//p-complect.ru/media/48823293147"
      },
      {
        "original": "https//p-complect.ru/media/48823293147",
        "medium": "https//p-complect.ru/media/48823293147",
        "large": "https//p-complect.ru/media/48823293147",
        "thumbnail": "https//p-complect.ru/media/48823293147"
      }
    ]
  },
  "tenders": {
    "title": "Мы являемся авторизованным участником торговых площадок",
    "coxntent": "Так же можем предложить материалы для внутренней отделки, следующих производителей: Кнауф, Юнис, Волма, Седрус, Вебер Ветонит и другие... За более подробной информацией, просим обращаться в отдел продаж по телефонам.",
    "items": [
      {
        "original": "https//p-complect.ru/media/48823293147",
        "medium": "https//p-complect.ru/media/48823293147",
        "large": "https//p-complect.ru/media/48823293147",
        "thumbnail": "https//p-complect.ru/media/48823293147"
      },
      {
        "original": "https//p-complect.ru/media/48823293147",
        "medium": "https//p-complect.ru/media/48823293147",
        "large": "https//p-complect.ru/media/48823293147",
        "thumbnail": "https//p-complect.ru/media/48823293147"
      },
      {
        "original": "https//p-complect.ru/media/48823293147",
        "medium": "https//p-complect.ru/media/48823293147",
        "large": "https//p-complect.ru/media/48823293147",
        "thumbnail": "https//p-complect.ru/media/48823293147"
      }
    ]
  },
  "articles": {
    // recent three
    "title": "Статьи",
    "coxntent": "Так же можем предложить материалы для внутренней отделки, следующих производителей: Кнауф, Юнис, Волма, Седрус, Вебер Ветонит и другие... За более подробной информацией, просим обращаться в отдел продаж по телефонам.",
    "items": [
      {
        "title": "Мастики как использовать",
        "href": "https//p-complect.ru/blog/48823293147",
        "excrept": "Так же можем предложить материалы для внутренней отделки, следующих производителей: Кнауф, Юнис, Волма, Седрус, Вебер Ветонит и другие... За более подробной информацией, просим обращаться в отдел продаж по телефонам",
        "image": {
          "original": "https//p-complect.ru/media/48823293147",
          "medium": "https//p-complect.ru/media/48823293147",
          "large": "https//p-complect.ru/media/48823293147",
          "thumbnail": "https//p-complect.ru/media/48823293147"
        }
      },
      {
        "title": "Мастики как использовать",
        "href": "https//p-complect.ru/blog/48823293147",
        "excrept": "Так же можем предложить материалы для внутренней отделки, следующих производителей: Кнауф, Юнис, Волма, Седрус, Вебер Ветонит и другие... За более подробной информацией, просим обращаться в отдел продаж по телефонам",
        "image": {
          "original": "https//p-complect.ru/media/48823293147",
          "medium": "https//p-complect.ru/media/48823293147",
          "large": "https//p-complect.ru/media/48823293147",
          "thumbnail": "https//p-complect.ru/media/48823293147"
        }
      },
      {
        "title": "Мастики как использовать",
        "href": "https//p-complect.ru/blog/48823293147",
        "excrept": "Так же можем предложить материалы для внутренней отделки, следующих производителей: Кнауф, Юнис, Волма, Седрус, Вебер Ветонит и другие... За более подробной информацией, просим обращаться в отдел продаж по телефонам",
        "image": {
          "original": "https//p-complect.ru/media/48823293147",
          "medium": "https//p-complect.ru/media/48823293147",
          "large": "https//p-complect.ru/media/48823293147",
          "thumbnail": "https//p-complect.ru/media/48823293147"
        }
      }
    ]
  }
}
```
