require(['main'], function() {

    require.config({
        paths: {
            'jquery': '../lib/jquery/jquery',
            'lodash': '../lib/lodash/dist/lodash',
            'backbone': '../lib/backbone/backbone'
        },
        map: {
            '*': {
                'wire/debug': 'wire/debug'
            }
        },
        packages: [
            { name: 'when', location: '../lib/when', main: './debug' }
        ]
    });

});
