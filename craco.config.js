const path = require('path');

module.exports = {
  eslint: {
    configure: {
      extends: ['plugin:react-hooks/recommended'],
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
      },
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig) => {
      const paths = require('react-scripts/config/paths');
      if (webpackConfig.entry) {
        const entryPath = paths.appIndexJs;
        if (typeof webpackConfig.entry === 'string') {
          webpackConfig.entry = entryPath;
        } else if (Array.isArray(webpackConfig.entry)) {
          webpackConfig.entry = webpackConfig.entry.map((item) =>
            typeof item === 'string' && /src[/\\]index\.jsx?$/.test(item) ? entryPath : item,
          );
        } else if (typeof webpackConfig.entry === 'object' && webpackConfig.entry.main) {
          const main = webpackConfig.entry.main;
          if (typeof main === 'string') {
            webpackConfig.entry.main = entryPath;
          } else if (Array.isArray(main)) {
            webpackConfig.entry.main = main.map((item) =>
              typeof item === 'string' && /src[/\\]index\.jsx?$/.test(item) ? entryPath : item,
            );
          }
        }
      }

      webpackConfig.watchOptions = {
        ...webpackConfig.watchOptions,
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/build/**',
          '**/dist/**',
          '**/coverage/**',
          '**/public/**',
        ],
      };

      return webpackConfig;
    },
  },
};
