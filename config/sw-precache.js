module.exports = {
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/*.html',
    'build/manifest.json',
    'build/static/**/!(*map*)'
  ],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js',
  navigateFallback: 'index.html' // https://github.com/jeffposnick/create-react-pwa#ive-added-in-react-router-and-now-my-urls-dont-work-offline
};