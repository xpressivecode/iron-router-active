Package.describe({
    summary: "An iron-router module for quickly adding classnames to your active navigation elements.",
    version: "0.2.0",
    name: "xpressivecode:iron-router-active",
    git: "https://github.com/XpressiveCode/iron-router-active.git"
});

Package.on_use(function(api){
    api.versionsFrom("METEOR@0.9.0");
    api.use([
        'ui',
        'iron:router@0.9.1'
    ], 'client');

    api.add_files([
        'LICENSE',
        'lib/client/helpers.js'
    ], 'client');
});
