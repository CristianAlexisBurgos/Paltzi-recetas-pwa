// const {
//   defaultInjectConfig,
//   rewireWorkboxInject
// } = require('react-app-rewire-workbox');
// const path = require('path');

// module.exports = function override(config, env) {
//   if (env === 'production') {
//     console.log('Generating Service Worker');
//     const workboxConfig = {
//       ...defaultInjectConfig,
//       swSrc: path.join(__dirname, 'src', 'service-worker.js')
//     };
//     config = rewireWorkboxInject(workboxConfig)(config, env)
//   }

//   return config;
// }

const workboxPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
  webpack: function (config, env) {
    if (env === ' production') {
      const workboxConfigProd = {
        swSrc: path.join(__dirname, 'src', 'service-worker.js'),
        swDest: 'service-worker.js',
        importWorkboxFrom: 'disabled'
      }
      config = removeSWPrecachePlugin(config);
      config.plugin.push(new workboxPlugin.InjectManifest(workboxConfigProd));
    }
    return config;
  }
}

function removeSWPrecachePlugin(config) {
  const swPrecachePluginIndex = config.plugins.findIndex((element) => {
    return element.constructor.name === 'SWPrecacheWebpackPlugin'
  })
  if (swPrecachePluginIndex !== -1) {
    config.plugins.splice(swPrecachePluginIndex, 1)
  }
  return config
}
