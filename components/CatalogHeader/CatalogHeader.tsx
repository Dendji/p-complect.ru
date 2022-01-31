import { useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import FilterIcon from '../FilterIcon/FilterIcon'
import Heading from '../Heading/Heading'
import style from './CatalogHeader.module.css'

interface Props {
  isFilter: boolean
  children: React.ReactNode
}
export default function CatalogHeader({ children, isFilter }: Props) {
  const onClick = () => {
    const event = new Event('toggleFilters')
    document.dispatchEvent(event)
  }

  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div className={style.header}>
      <Heading weight={2} noMt className={style.heading}>
        {children}
      </Heading>

      {isMobile && isFilter && (
        <button className={style.filterButton} onClick={onClick}>
          <FilterIcon />
        </button>
      )}
    </div>
  )
}
