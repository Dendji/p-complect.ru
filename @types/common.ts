export enum AlphabetSize {
  L = 'L',
  M = 'M',
  S = 'S',
}

export interface StringMap {
  [key: string]: string
}

export interface IImage {
  large: string
  medium: string
  preview: string
  thumbnail: string
}

export type FilterMinMax = {
  min: string
  max: string
}
export interface IFilter {
  [key: string]: {
    id: number
    name: string
    type: 'checkbox' | 'dropdown' | 'range'
    values: string[] | FilterMinMax
  }
}

export interface IInit {
  logoLight: string | null
  logoDark: string | null
  categories: Category[] | null
  search: string[] | null
  contacts: {
    title: string | null
    items: {
      type: 'text' | 'tel' | 'map'
      title: string
      items: {
        текст: string
      }[]
      link: string
    }[]
    map: string | null
    seo_description: string | null
    seo_title: string | null
  }
  headerNav:
    | {
        title: string
        href: string
      }[]
    | null
  footerNav:
    | {
        title: string
        href: string
      }[]
    | null
}

export interface Category {
  id: number
  name: string
  meta: { title: string; description: string }
  svg?: string
  subcategories: Category[]
}
