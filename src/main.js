require.config({
    deps: ['core/composer'],
    callback: function(composer) {
        composer.boot();
    },
    shim: {
        'backbone': {
            'deps': ['lodash', 'jquery'],
            'exports': 'Backbone'
        }
    },
    paths: {
        'jquery': '../lib/jquery/jquery.min',
        'lodash': '../lib/lodash/dist/lodash.min',
        'backbone': '../lib/backbone/backbone-min',
        'maria.orig': 'lib/maria-amd',
        'maria': 'lib/maria.extensions'
    },
    map: {
        '*': {
            'wire/debug': 'wire/wire'
        }
    },
    packages: [
        { name: 'wire', location: '../lib/wire', main: 'wire' },
        { name: 'meld', location: '../lib/meld', main: 'meld' },
        { name: 'when', location: '../lib/when', main: 'when' }
    ]
});
