const sitemap = require('nextjs-sitemap-generator')

sitemap({
  baseUrl: 'https://p-complect.ru',
  pagesDirectory: __dirname + '/out',
  targetDirectory: 'public/',
  ignoredExtensions: ['js', 'map'],
  // ignoredPaths: ['[fallback]'],
})
