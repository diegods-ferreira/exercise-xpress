module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'inline-dotenv',
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@/assets': './src/assets',
            '@/components': './src/components',
            '@/config': './src/config',
            '@/features': './src/features',
            '@/routes': './src/routes',
            '@/stores': './src/stores',
            '@/utils': './src/utils',
          },
        },
      ],
    ],
  };
};
