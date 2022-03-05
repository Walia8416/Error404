module.exports = api => {
  const babelEnv = api.env()
  const baseConfig = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      // 'macros',
      // [
      //   // 'babel-plugin-root-import',
      //   {
      //     rootPathSuffix: './src/',
      //     rootPathPrefix: '~/',
      //   },
      // ],
    ],
  }

  const isInTesting = babelEnv === 'test'

  if (isInTesting)
    return {
      ...baseConfig,
      plugins: [
        ...baseConfig.plugins,
        // Mock .env during testing
        // 'react-native-config-node/transform',
      ],
    }

  return {
    ...baseConfig,
    plugins: [...baseConfig.plugins, 'react-native-reanimated/plugin'],
  }
}



// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//     plugins: [
//           'react-native-reanimated/plugin',
//       ],
// };
