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
          '@components': './src/ui/components',
          '@app_types': './src/types',
          '@styles': './src/ui/styles',
          '@api': './src/api',
        },
      },
    ],
  ],
};
