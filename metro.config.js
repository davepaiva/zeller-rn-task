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
      '@components': `${__dirname}/src/ui/components`,
      '@app_types': `${__dirname}/src/types`,
      '@styles': `${__dirname}/src/ui/styles`,
      '@api': `${__dirname}/src/api`,
    },
  },
  watchFolders: [__dirname],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
