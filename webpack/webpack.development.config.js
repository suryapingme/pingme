const webpack = require("webpack")
const config = require("./webpack.config.js")

config.forEach((target) => {
  target.devtool = "inline-source-map"

  target.plugins.push(
    new webpack.DefinePlugin({
      "ENV": JSON.stringify("development"),
    })
  )
})

module.exports = config
