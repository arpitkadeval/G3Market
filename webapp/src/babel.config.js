module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      // other plugins,
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }),

      "macros",
    ],
  };
};
