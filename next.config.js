require('dotenv').config()

module.exports = {
  trailingSlash: true,
  future: {
    webpack5: false,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}
