import React from 'react'

interface DbrainLogoProps {
  light?: boolean
}

export default function DbrainLogo(props: DbrainLogoProps) {
  return (
    <svg
      width="95"
      height="22"
      viewBox="0 0 95 22"
      xmlns="http://www.w3.org/2000/svg"
      fill={props.light ? '#FAFAFA' : '#111111'}
    >
      <path d="M8.0182 0.14856C11.1529 0.14856 13.7853 1.18954 15.9155 3.27149C18.0456 5.35345 19.106 7.90942 19.106 10.9208C19.106 13.9415 18.0456 16.4882 15.9155 18.5702C13.7853 20.6521 11.1529 21.6931 8.0182 21.6931H0V0.14856H8.0182ZM4.63232 4.31247V17.5571H8.0182C9.80415 17.5571 11.3297 16.9158 12.5947 15.6331C13.8598 14.3505 14.4923 12.789 14.4923 10.9394C14.4923 9.08982 13.8784 7.52835 12.6412 6.24572C11.4041 4.96308 9.86927 4.32176 8.0275 4.32176H4.63232V4.31247Z" />
      <path d="M36.3892 8.58792C37.8217 10.1029 38.5379 11.9618 38.5379 14.1553C38.5379 16.3488 37.8217 18.2077 36.3799 19.7227C34.9381 21.2377 33.2452 21.9998 31.3011 21.9998C30.436 21.9998 29.6267 21.8232 28.8826 21.47C28.1291 21.1168 27.5989 20.7637 27.292 20.4105L26.8362 19.8528V21.7024H22.6689V0.148562H26.8455V8.4578C26.8827 8.40203 26.9478 8.31838 27.0222 8.23473C27.1059 8.14179 27.2827 7.97449 27.5524 7.73283C27.8222 7.49118 28.1291 7.26811 28.4454 7.07293C28.7617 6.87774 29.1895 6.70115 29.7012 6.54314C30.2221 6.38514 30.7523 6.31078 31.3011 6.31078C33.2638 6.31078 34.9567 7.06363 36.3892 8.58792ZM33.1521 17.1481C33.8684 16.3674 34.2312 15.3729 34.2312 14.1553C34.2312 12.947 33.8684 11.9525 33.1521 11.1718C32.4359 10.391 31.5615 10.01 30.5383 10.01C29.5058 10.01 28.6407 10.4003 27.9245 11.1718C27.2082 11.9525 26.8455 12.947 26.8455 14.1553C26.8455 15.3636 27.2082 16.3674 27.9245 17.1481C28.6407 17.9288 29.5151 18.3192 30.5383 18.3192C31.5615 18.3192 32.4359 17.9288 33.1521 17.1481Z" />
      <path d="M50.7324 10.6235C50.4255 10.5213 49.9604 10.4655 49.3465 10.4562C48.2489 10.4562 47.3838 10.8001 46.7513 11.4972C46.1187 12.185 45.7932 13.1795 45.7932 14.4714V21.7025H41.6445V6.60831H45.7932V8.4579C45.9141 8.31848 46.0815 8.1326 46.3048 7.90953C46.528 7.68646 47.0117 7.38904 47.7559 7.01726C48.5 6.64548 49.2907 6.45959 50.1092 6.45959H50.7231V10.6235H50.7324Z" />
      <path d="M61.7925 6.85011C62.5367 7.2126 63.0669 7.56578 63.3831 7.90039L63.8482 8.45805V6.65493H67.9969V21.7026H63.8482V19.8531C63.811 19.9088 63.7459 19.9925 63.6622 20.0854C63.5785 20.1784 63.3924 20.355 63.1227 20.5966C62.8436 20.8383 62.546 21.0613 62.2297 21.2565C61.9134 21.4517 61.4949 21.6283 60.9832 21.777C60.4716 21.9257 59.9414 22.0001 59.3926 22.0001C57.4392 22.0001 55.737 21.2379 54.3045 19.7229C52.8627 18.2079 52.1465 16.349 52.1465 14.1556C52.1465 11.9621 52.8627 10.1032 54.3045 8.58818C55.7463 7.07318 57.4392 6.31104 59.3926 6.31104C60.2484 6.31104 61.0484 6.48763 61.7925 6.85011ZM62.7692 17.1484C63.4947 16.3676 63.8482 15.3731 63.8482 14.1556C63.8482 12.9473 63.4854 11.9528 62.7692 11.172C62.0437 10.3913 61.1786 10.0102 60.1554 10.0102C59.1322 10.0102 58.2578 10.4006 57.5416 11.172C56.816 11.9528 56.4625 12.9473 56.4625 14.1556C56.4625 15.3638 56.8253 16.3676 57.5416 17.1484C58.2671 17.9291 59.1322 18.3195 60.1554 18.3195C61.1693 18.3195 62.0437 17.9291 62.7692 17.1484Z" />
      <path d="M76.1451 3.97802C75.7079 4.39627 75.1033 4.61005 74.3405 4.61005C73.6429 4.61005 73.0755 4.39627 72.6662 3.97802C72.2476 3.55977 72.043 3.00211 72.043 2.30502C72.043 1.60794 72.2569 1.05027 72.6755 0.63202C73.0941 0.21377 73.6522 -1.13458e-06 74.3498 -1.13458e-06C75.1126 -1.13458e-06 75.7172 0.21377 76.1544 0.63202C76.5916 1.05027 76.8148 1.60794 76.8148 2.30502C76.8055 3.00211 76.5823 3.55977 76.1451 3.97802ZM76.4986 21.7025H72.3313V6.60836H76.4986V21.7025Z" />
      <path d="M84.8327 8.45807C84.9536 8.30006 85.1211 8.09559 85.3443 7.86323C85.5676 7.63087 86.0513 7.30556 86.7954 6.90589C87.5396 6.50623 88.3302 6.30176 89.1488 6.30176C90.8696 6.30176 92.2835 6.8966 93.3718 8.08629C94.4601 9.27598 94.9996 10.8839 94.9996 12.9101V21.6841H90.851V13.3748C90.851 12.4547 90.5813 11.7111 90.0325 11.1442C89.4836 10.5772 88.786 10.2984 87.9209 10.2984C86.9814 10.2984 86.228 10.6051 85.6699 11.2185C85.1118 11.832 84.8327 12.7056 84.8327 13.8396V21.6841H80.6841V6.60848H84.8327V8.45807Z" />
    </svg>
  )
}
