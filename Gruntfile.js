module.exports = function(grunt) {

    grunt.initConfig({

        requirejs: {
            compile: {
                options: {
                    appDir: 'src',
                    mainConfigFile: 'src/main.js',
                    baseUrl: '.',
                    dir: 'dist',
                    skipDirOptimize: true,
                    optimizeCss: 'none',
                    paths: {
                        requireLib: '../lib/requirejs/require'
                    },
                    modules: [{
                        name: 'main',
                        include: ['requireLib', 'backbone', 'maria']
                    }, {
                        name: 'view/vanillaJS/spec',
                        exclude: ['core/composer']
                    }, {
                        name: 'view/vanillaJS/wifi/spec',
                        exclude: ['core/composer']
                    }, {
                        name: 'view/backboneView/spec',
                        exclude: ['backbone']
                    }, {
                        name: 'view/backboneView/large/spec',
                        exclude: ['backbone']
                    }, {
                        name: 'view/mariaView/spec',
                        exclude: ['maria']
                    }, {
                        name: 'view/flightView/spec',
                        exclude: ['core/composer', 'jquery']
                    }]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['requirejs:compile']);

};
