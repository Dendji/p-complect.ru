import Masonry from 'react-masonry-css'
import style from './MasonryGrid.module.css'
interface Props {
  children: React.ReactNode
}

const MasonryGrid = ({ children }: Props) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  }
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={style.myMasonryGrid}
      columnClassName={style.myMasonryGridColumn}
    >
      {children}
    </Masonry>
  )
}

export default MasonryGrid
