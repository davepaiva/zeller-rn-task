module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@app_types': './src/types',
          '@styles': './src/styles',
          '@api': './src/api',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
