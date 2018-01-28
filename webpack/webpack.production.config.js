const webpack = require("webpack")
const config = require("./webpack.config")

config.forEach((target) => {
  target.output.publicPath = "/apps/samba-ui/"

  target.plugins.push(
    // Sets NODE_ENV variable to "production", React uses this to remove
    // non-needed code, it reduces the final bundle size.
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production"),
      },
    })
  )

  target.plugins.push(
    // We could use the -p options of webpack, but it's verbose and
    // not configurable easily. Explicitly adding the plugin is better.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        dead_code: true,
        drop_debugger: true,
        drop_console: true,
        screw_ie8: true,
      },
      mangle: true,
    })
  )
})

module.exports = config
