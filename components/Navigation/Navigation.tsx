import React from 'react'
import style from './Navigation.module.css'
import Link from 'next/link'
import { Nav } from '../../utils/nav'
import Drawer from '@material-ui/core/Drawer'
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import AddressWidget from '../AddressWidget/AddressWidget'
import HoursWidget from '../HoursWidget/HoursWidget'
import CallWidget from '../CallWidget/CallWidget'

export interface NavigationProps {
  isOpen: boolean
  navs: Nav[]
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
export default function Navigation({ isOpen, navs, onClose }: NavigationProps) {
  const container =
    typeof window !== 'undefined' ? () => window.document.body : undefined
  const classes = useStyles()
  // const theme = useTheme()

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
        <nav className={style.nav}>{navs.map(mapNav)}</nav>
        <div className={style.widgets}>
          <HoursWidget />
          <AddressWidget isMobile />

          <CallWidget />
        </div>
      </div>
    </Drawer>
  )
}
