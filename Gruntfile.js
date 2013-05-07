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
                        include: ['view/vanillaJS/main'],
                        exclude: ['core/composer']
                    }, {
                        name: 'view/vanillaJS/wifi/spec',
                        include: ['view/vanillaJS/wifi/main'],
                        exclude: ['core/composer']
                    }, {
                        name: 'view/backboneView/spec',
                        include: ['view/backboneView/main'],
                        exclude: ['backbone']
                    }, {
                        name: 'view/backboneView/large/spec',
                        include: ['view/backboneView/large/main'],
                        exclude: ['backbone']
                    }, {
                        name: 'view/mariaView/spec',
                        include: ['view/mariaView/main'],
                        exclude: ['maria']
                    }]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['requirejs:compile']);

};
