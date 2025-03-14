const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules: {
      '@screens': `${__dirname}/src/screens`,
      '@components': `${__dirname}/src/components`,
      '@app_types': `${__dirname}/src/types`,
      '@styles': `${__dirname}/src/styles`,
      '@api': `${__dirname}/src/api`,
      '@hooks': `${__dirname}/src/hooks`,
    },
  },
  watchFolders: [__dirname],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
