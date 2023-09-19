const NextFederationPlugin = require('@module-federation/nextjs-mf')

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'remote',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            remote: 'remote@http://127.0.0.1:8081/_next/static/chunks/remoteEntry.js',
            host: 'host@http://127.0.0.1:8080/remoteEntry.js',
            // Dataexplorer: `Dataexplorer@http://127.0.0.1:3000/app/data-explorer/_next/static/chunks/remoteEntryDataexplorer.js`,
          },
          exposes: {
            './nextjs-remote-component': './components/nextjs-remote-component.js',
          },
          shared: {},
          extraOptions: {
            // skipSharingNextInternals: true,
          },
        }),
      );
    }
    return config;
  },
};
