export default {
  presets: [
    [
      "latest",
      {
        es2015: {
          modules: false,
        },
      },
    ],
  ],
  plugins: [
    "syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties", 
    "@babel/plugin-proposal-object-rest-spread"
    [
      "transform-runtime",
      {
        helpers: false,
        polyfill: false,
      },
    ],
    "lodash",
  ],
  env: {
    test: {
      plugins: ["dynamic-import-node"],
    },
  },
};
