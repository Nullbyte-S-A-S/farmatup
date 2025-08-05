module.exports = function (api) {
  api.cache(true);
  let plugins = [];

  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel',],

    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './app',
            '@components': './app/components',
            '@utils': './app/utils',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.ios.js', '.android.js'],
        },
      ],
    ],
  };
};
