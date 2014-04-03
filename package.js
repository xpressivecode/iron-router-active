Package.describe({
    summary: "An iron-router module for quickly adding classnames to your active navigation elements."
});

Package.on_use(function(api){
    api.use([
        'coffeescript',
        'iron-router',
        'ui'
    ], 'client');

    api.add_files([
        'LICENSE',
        'lib/client/helpers.coffee',
        'lib/client/routeutils.coffee'
    ], 'client');
});
