import React from 'react'
import style from './Navigation.module.css'
import Link from 'next/link'
import { Nav } from '../../utils/nav'
import Drawer from '@mui/material/Drawer'
import { Theme } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'

import AddressWidget from '../AddressWidget/AddressWidget'
import HoursWidget from '../HoursWidget/HoursWidget'
import CallWidget from '../CallWidget/CallWidget'
import { useDispatch } from 'react-redux'
import { IInit } from '../../@types/common'

export interface NavigationProps {
  isOpen: boolean
  navs: Nav[]
  init?: IInit
  onClose: () => void
}
const drawerWidth = 280

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
)

const mapNav = (nav: Nav, index: number): React.ReactNode => {
  return nav.submenu ? (
    nav.submenu.map(mapNav)
  ) : (
    <div className={style.link} key={index + nav.href}>
      <Link href={nav.href}>
        <a>{nav.title}</a>
      </Link>
    </div>
  )
}

export default function Navigation({
  isOpen,
  navs,
  init,
  onClose,
}: NavigationProps) {
  const container =
    typeof window !== 'undefined' ? () => window.document.body : undefined
  const classes = useStyles()
  // const theme = useTheme()

  const dispatch = useDispatch()

  const openContactUs = () => {
    dispatch({
      type: 'OPEN_CONTACT_US',
    })
  }

  return (
    <Drawer
      anchor={'left'}
      container={container}
      open={isOpen}
      onClose={onClose}
      variant="temporary"
      classes={{
        paper: classes.drawerPaper,
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <div className={style.root}>
        <nav className={style.nav}>{init?.headerNav?.map(mapNav)}</nav>
        <div className={style.widgets}>
          <HoursWidget init={init} />
          <AddressWidget isMobile init={init} />
          <CallWidget onCall={openContactUs} init={init} />
        </div>
      </div>
    </Drawer>
  )
}
