module.exports = {
  presets: [
    ["@babel/preset-env", {
      targets: {
        node: true,
      },
    }],
  ],
  plugins: [
    ["@babel/plugin-transform-runtime", {
      regenerator: true,
    }],
  ]
}
