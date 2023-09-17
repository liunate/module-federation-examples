const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
    reactStrictMode: true,
    webpack(config, options) {
        Object.assign(config.experiments, { topLevelAwait: true });

        if (!options.isServer) {
            config.plugins.push(
              new NextFederationPlugin({
                  name: 'remote',
                  exposes: {
                      './nextjs-remote-component': './components/nextjs-remote-component.js',
                  },
                  remotes: {
                      remote: 'remote@http://localhost:8081/_next/static/chunks/remoteEntry.js',
                      host: 'host@http://localhost:8080/remoteEntry.js',
                  },
                  shared: {},
                  filename: 'static/chunks/remoteEntry.js',
              }),
          );
        }
    return config;
  },
};
