module.exports = {
  presets: [
    '@babel/env',
    '@babel/typescript',
    [
      '@babel/react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [['@babel/plugin-proposal-class-properties']],
};
