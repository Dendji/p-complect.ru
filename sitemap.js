const sitemap = require('nextjs-sitemap-generator')

sitemap({
  baseUrl: 'https://dbrain.io',
  pagesDirectory: __dirname + '/out',
  targetDirectory: 'public/',
  ignoredExtensions: ['js', 'map'],
  // ignoredPaths: ['[fallback]'],
})
