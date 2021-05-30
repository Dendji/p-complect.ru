import FormControlLabel from '@material-ui/core/FormControlLabel'
import Slider from '@material-ui/core/Slider'
import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import React, { useState } from 'react'
import style from './CatalogSidebar.module.css'
import Button, { ButtonTheme } from '../Button/Button'
import { AlphabetSize } from '../../@types/common'
import { Checkbox } from '@material-ui/core'

interface Props {}

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

const categories = [
  'Рулонная гидроизоляция',
  'Полимерные мембраны',
  'Мастики и праймеры',
  'Герметики и пены',
  'Комплектующие',
]

export default function CatalogSidebar({}: Props) {
  // const router = useRouter()

  const [price, setPrice] = useState<number | number[]>([5000, 80000])
  const [filterBy, setFilterBy] = useState<string[]>([])

  return (
    <div className={style.root}>
      <div className={style.heading}>Цена</div>

      <PrettoSlider
        ValueLabelComponent={ValueLabelComponent}
        value={price}
        valueLabelFormat={(value) => (
          <div className={style.sliderValue}>{value + ' ₽'}</div>
        )}
        max={100000}
        onChange={(event: React.ChangeEvent<{}>, value: number | number[]) =>
          setPrice(value)
        }
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        // getAriaValueText={valuetext}
      />
      <div className={style.heading}>Товары</div>
      <div className={style.subheading}>Гидроизоляция</div>
      <div className="multiselect">
        {categories.map((c, idx) => (
          <FormControlLabel
            key={idx}
            control={
              <Checkbox
                checked={filterBy.includes(c)}
                onChange={(
                  event: React.ChangeEvent<HTMLInputElement>,
                  checked: boolean
                ) => {
                  checked
                    ? setFilterBy([...filterBy, c])
                    : setFilterBy(filterBy.filter((cat) => cat !== c))
                }}
                name="checkedB"
                color="primary"
              />
            }
            label={c}
          />
        ))}
      </div>
      <div className={style.buttons}>
        <Button theme={ButtonTheme.Orange} size={AlphabetSize.L}>
          Применить
        </Button>
        <Button theme={ButtonTheme.OrangeBordered} size={AlphabetSize.L}>
          Очистить
        </Button>
      </div>
    </div>
  )
}
