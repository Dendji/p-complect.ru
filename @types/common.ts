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
