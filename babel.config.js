module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        loose: true,
      },
    ],
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ];

  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: {
          version: 3,
          proposals: true,
        },
        version: '^7.16.0',
      },
    ],
    '@babel/plugin-proposal-optional-chaining',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-classes', { loose: true }],
    ['@babel/plugin-transform-template-literals', { loose: true }],
  ];

  return { presets, plugins };
};
