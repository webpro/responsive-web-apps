require.config({
    deps: ['core/composer'],
    callback: function(composer) {
        composer.boot();
    },
    shim: {
        'backbone': {
            'deps': ['lodash', 'jquery'],
            'exports': 'Backbone'
        },
        'flight/lib/component': {
            'deps': ['jquery']
        }
    },
    paths: {
        'jquery': '../lib/jquery/jquery.min',
        'lodash': '../lib/lodash/dist/lodash.min',
        'backbone': '../lib/backbone/backbone-min',
        'maria.orig': 'lib/maria-amd',
        'maria': 'lib/maria.extensions',
        'flight': '../lib/flight'
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
