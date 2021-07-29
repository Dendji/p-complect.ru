import FormControlLabel from '@material-ui/core/FormControlLabel'
import Slider from '@material-ui/core/Slider'
import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import React, { useState } from 'react'
import style from './CatalogSidebar.module.css'
import Button, { ButtonTheme } from '../Button/Button'
import { AlphabetSize, IFilter } from '../../@types/common'
import {
  Checkbox,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
} from '@material-ui/core'

import Select from 'react-select'

interface Props {
  filters: IFilter
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

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

export default function CatalogSidebar({ filters }: Props) {
  // const router = useRouter()

  const [price, setPrice] = useState<number | number[]>([5000, 80000])
  const [filterBy, setFilterBy] = useState<string[]>([])

  const [values, setValues] = useState<any>([])

  const renderFilter = () => {
    return Object.values(filters).map((f) => {
      if (f.type === 'checkbox') {
        return f.values.length > 0 ? (
          <div className={style.filterItem}>
            <div className={style.filterLabel}>{f.name}</div>
            <Select
              onChange={(value) =>
                setValues([...values, { name: f.name, value: value }])
              }
              isMulti
              placeholder="Любая"
              noOptionsMessage={() => 'Нет опций'}
              value={
                values.find((v: any) => v.name === f.name)?.value || undefined
              }
              options={f.values.map((v) => ({ value: v, label: v }))}
            />
          </div>
        ) : null
      }
      if (f.type === 'dropdown') {
        return f.values.length > 0 ? (
          <div className={style.filterItem}>
            <div className={style.filterLabel}>{f.name}</div>
            <Select
              onChange={(value) =>
                setValues([...values, { name: f.name, value: value }])
              }
              placeholder="Любая"
              value={
                values.find((v: any) => v.name === f.name)?.value || undefined
              }
              options={f.values.map((v) => ({ value: v, label: v }))}
            />
          </div>
        ) : null
      }
    })
  }
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
      <div className={style.filter}>{renderFilter()}</div>
      {/* <div className="multiselect">
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
      <div className={style.subheading}>Область применения</div>
      <div className="multiselect">
        {applyFields.map((c, idx) => (
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
      <div className={style.subheading}>Вид</div>
      <div className="multiselect">
        {kinds.map((c, idx) => (
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
      <div className={style.subheading}>Основа</div>
      <div className="multiselect">
        {foundations.map((c, idx) => (
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
      </div> */}
      {/* <FormControl className={style.formControl}>
        <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={[]}
          // onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {foundations.map((f) => (
            <MenuItem key={f} value={f}>
              {f}
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}
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
