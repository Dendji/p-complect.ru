import Slider from '@material-ui/core/Slider'
import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import React, { useCallback, useEffect, useState } from 'react'
import style from './CatalogSidebar.module.css'
import Button, { ButtonSize, ButtonTheme } from '../Button/Button'
import { AlphabetSize, FilterMinMax, IFilter } from '../../@types/common'
import { useMediaQuery, useTheme } from '@material-ui/core'

import Popup from '../Popup/Popup'
import CloseButton from '../CloseButton/CloseButton'
import FilterIcon from '../FilterIcon/FilterIcon'
import TextInput, { InputTheme } from '../TextInput/TextInput'
import Select from '../Select/Select'

interface Props {
  filters: IFilter
  isSubmitLoading?: boolean
  onFilterChange: (filter: any[]) => void
}

const PrettoSlider = withStyles({
  root: {
    color: '#FAAC3D',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider)

interface VLProps {
  children: React.ReactElement
  open: boolean
  value: number
}
function ValueLabelComponent(props: VLProps) {
  const { children, open, value } = props

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  )
}

export default function CatalogSidebar({
  filters,
  isSubmitLoading,
  onFilterChange,
}: Props) {
  // const router = useRouter()

  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const [price, setPrice] = useState<number | number[]>([5000, 80000])
  const [isOpen, setOpen] = useState<boolean>(false)

  const [filter, setFilter] = useState<any[]>([])

  const onToggleFilter = () => {
    setOpen(!isOpen)
  }

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
    // const newFilter = option
    //   ? [...filter, { name, value: option }]
    //   : filter.filter((v) => v.name !== name)

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

  const onPriceChange = (value: number | number[]) => {
    setPrice(value)
  }

  const onApply = () => {
    onFilterChange(filter)
    if (isOpen) setOpen(false)
  }

  const onReset = () => {
    setFilter([])
    onFilterChange([])
    if (isOpen) setOpen(false)
  }

  const renderFilter = () => {
    return Object.values(filters).map((f, key) => {
      switch (f.type) {
        case 'range':
          const min = Number.parseInt((f.values as FilterMinMax).min)
          const max = Number.parseInt((f.values as FilterMinMax).max)
          return min !== max ? (
            <div className={style.rangeContainer} key={key}>
              <div className={style.filterLabel}>{f.name}, ₽</div>
              <div className={style.range}>
                <span>от</span>
                <TextInput
                  placeholder="От"
                  value={min}
                  theme={InputTheme.Box}
                  // onChange={handleChange}
                  // error={errors.name}
                  // isError={!!errors.name && touched.name}
                  autoComplete="no"
                />
                <span>до</span>
                <TextInput
                  value={max}
                  placeholder="От"
                  theme={InputTheme.Box}
                  // onChange={handleChange}
                  // error={errors.name}
                  autoComplete="no"
                />
              </div>
            </div>
          ) : null
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
        theme={ButtonTheme.BlueBordered}
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
        <div className={style.filter}>{renderFilter()}</div>
        {renderControls()}
      </div>
    </Popup>
  ) : (
    <div className={style.root}>
      <div className={style.heading}>Товары</div>
      <div className={style.filter}>{renderFilter()}</div>
      {renderControls()}
    </div>
  )
}
