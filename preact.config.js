export default (config, env, helpers) => {
    config.output.publicPath = '/preact-pokeno/';
    
    if (config.devServer) {
        config.devServer.publicPath = '/preact-pokeno/';
        config.devServer.contentBasePublicPath = '/preact-pokeno/';
        config.devServer.openPage = 'preact-pokeno/';
        config.devServer.open = true;   
    }

    // use the public path in your app as 'process.env.PUBLIC_PATH'
    config.plugins.push(
        new helpers.webpack.DefinePlugin({
            'process.env.PUBLIC_PATH': JSON.stringify(config.output.publicPath || '/')
        })
    );
};