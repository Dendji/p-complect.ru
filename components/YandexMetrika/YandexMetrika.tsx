import React from 'react'

export default function YandexMetrika() {
  return (
    <>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
        <div><img src="https://mc.yandex.ru/watch/85324150" style="position:absolute; left:-9999px;" alt="" /></div>
        `,
        }}
      ></noscript>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(85324150, "init", {
                trackLinks:true,
                accurateTrackBounce:true,
          });
    `,
        }}
      ></script>
    </>
  )
}
