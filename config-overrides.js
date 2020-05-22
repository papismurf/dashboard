/* config-overrides.js */

const { injectBabelPlugin } = require('react-app-rewired');
// const rewireProvidePlugin = require('react-app-rewire-provide-plugin');
const rewireLess = require('react-app-rewire-less');


module.exports = function override(config, env) {

  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);

  // Use `webpack.ProvidePlugin` to add jQuery globally
  // config = rewireProvidePlugin(config, env, {
  //   $: "jquery",
  //   jQuery: "jquery",
  //   "window.jQuery": "jquery"
  // })

  // Add LESS support
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#6887d8", //
      "@font-family": 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' ,
      "@text-color": "rgba(0, 0, 0, 0.87)",
      "@border-radius-base": "4px",
      "@menu-dark-bg": '#8eaadd',
      '@menu-dark-submenu-bg': '#b2a4e4',
      "@layout-header-background": 'transparent',
    },
  })(config, env);

  return config;
}
