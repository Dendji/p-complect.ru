import React from 'react'

export default function Gtag() {
  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Ads: 587610331 --> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-587610331"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'AW-587610331');
    `,
        }}
      ></script>
    </>
  )
}
