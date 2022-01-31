import React, { useCallback, useEffect, useState } from 'react'
import style from './CatalogSidebar.module.css'
import Button, { ButtonSize, ButtonTheme } from '../Button/Button'
import { Category, FilterMinMax, IFilter } from '../../@types/common'
import { useMediaQuery, useTheme } from '@mui/material'

import Popup from '../Popup/Popup'
import CloseButton from '../CloseButton/CloseButton'
// import TextInput, { InputTheme } from '../TextInput/TextInput'
import Select from '../Select/Select'

interface Props {
  filters: IFilter
  isSubmitLoading?: boolean
  categories: Category[]
  currentCategory: Category
  onFilterChange: (filter: any[], sub: string | null) => void
}

export default function CatalogSidebar({
  filters,
  isSubmitLoading,
  currentCategory,
  onFilterChange,
}: Props) {
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  // const [priceFrom, setPriceFrom] = useState<number | number[]>([5000, 80000])
  // const [priceTo, setPriceTo] = useState<number | number[]>([5000, 80000])
  const [isOpen, setOpen] = useState<boolean>(false)

  const [filter, setFilter] = useState<any[]>([])
  const [sub, setSub] = useState<{
    label: string
    value: string
  } | null>(null)

  const eventHandlerCallback = useCallback(() => {
    setOpen(true)
  }, [setOpen])

  useEffect(() => {
    document.addEventListener('toggleFilters', eventHandlerCallback)
    return () => {
      document.removeEventListener('toggleFilters', eventHandlerCallback)
    }
  }, [])

  const onSelectChange = (
    name: string,
    option: { value: string; label: string } | null
  ) => {
    const newFilter = filter.some((f) => f.name === name)
      ? filter.map((f) => {
          if (f.name === name) {
            return { name, value: option }
          }
          return f
        })
      : [...filter, { name, value: option }]

    setFilter(newFilter)
  }

  const onSubChange = (option: { value: string; label: string } | null) => {
    setSub(option)
  }

  // const onPriceChange = (value: number | number[]) => {
  //   setPrice(value)
  // }

  const onApply = () => {
    onFilterChange(filter, sub?.value || null)
    if (isOpen) setOpen(false)
  }

  const onReset = () => {
    setFilter([])
    setSub(null)
    onFilterChange([], null)
    if (isOpen) setOpen(false)
  }

  const renderFilter = () => {
    return Object.values(filters).map((f, key) => {
      switch (f.type) {
        case 'range':
          // const min = Number.parseInt((f.values as FilterMinMax).min)
          // const max = Number.parseInt((f.values as FilterMinMax).max)
          return null
        // return min !== max ? (
        //   <div className={style.rangeContainer} key={key}>
        //     <div className={style.filterLabel}>{f.name}, ₽</div>
        //     <div className={style.range}>
        //       <span>от</span>
        //       <TextInput
        //         placeholder="От"
        //         value={min}
        //         theme={InputTheme.Box}
        //         // onChange={handleChange}
        //         // error={errors.name}
        //         // isError={!!errors.name && touched.name}
        //         autoComplete="no"
        //       />
        //       <span>до</span>
        //       <TextInput
        //         value={max}
        //         placeholder="От"
        //         theme={InputTheme.Box}
        //         // onChange={handleChange}
        //         // error={errors.name}
        //         autoComplete="no"
        //       />
        //     </div>
        //   </div>
        // ) : null
        case 'checkbox':
        case 'dropdown':
        default:
          return (f.values as string[]).length > 0 ? (
            <div className={style.filterItem} key={key}>
              <div className={style.filterLabel}>{f.name}</div>
              <Select
                instanceId={key}
                isClearable
                onChange={(value) => onSelectChange(f.name, value)}
                placeholder="Все"
                value={
                  filter.find((v: any) => v.name === f.name)?.value || undefined
                }
                options={(f.values as string[]).map((v) => ({
                  value: v,
                  label: v,
                }))}
              />
            </div>
          ) : null
      }
    })
  }

  const renderControls = () => (
    <div className={style.buttons}>
      <Button
        theme={ButtonTheme.Orange}
        size={ButtonSize.M}
        onClick={onApply}
        isLoading={isSubmitLoading}
      >
        Применить
      </Button>
      <Button
        theme={ButtonTheme.OrangeBordered}
        size={ButtonSize.M}
        onClick={onReset}
        disabled={isSubmitLoading}
      >
        Очистить
      </Button>
    </div>
  )

  return isMobile ? (
    <Popup isOn={isOpen}>
      <div className={style.popup}>
        <div className={style.close}>
          <CloseButton onClose={() => setOpen(false)} />
        </div>
        <div className={style.heading}>Товары</div>
        <div className={style.filterItem}>
          <div className={style.filterLabel}>Категории</div>
          <Select
            instanceId={'4123'}
            isClearable
            onChange={(option) => onSubChange(option)}
            placeholder="Все"
            value={sub}
            options={currentCategory.subcategories.map((s: any) => ({
              label: s.name,
              value: s.id + '',
            }))}
          />
        </div>
        <div className={style.filter}>{renderFilter()}</div>
        {renderControls()}
      </div>
    </Popup>
  ) : (
    <div className={style.root}>
      <div className={style.heading}>Товары</div>

      <div className={style.filter}>
        <div className={style.filterItem}>
          <div className={style.filterLabel}>Категории</div>
          <Select
            instanceId={'4123'}
            isClearable
            onChange={(option) => onSubChange(option)}
            placeholder="Все"
            value={sub}
            options={currentCategory.subcategories.map((s: any) => ({
              label: s.name,
              value: s.id + '',
            }))}
          />
        </div>
        {renderFilter()}
      </div>
      {renderControls()}
    </div>
  )
}
