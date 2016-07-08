module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        concurrent: {
            dev: {
                tasks: ['nodemon:dev', 'watch', 'browserify:dev'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "public/dist/css/main.css": "client/src/sass/main.scss"
                }
            }
        },
        babel: {
            options: {
                sourceMap: true,
                plugins: ['transform-react-jsx'],
                presets: ['es2015', 'react']
            },
            dist: {
                files: [
                    {
                        "expand": true,
                        "cwd": "client/src/js",
                        "src": ["**/*.js"],
                        "dest": "client/dist/js/",
                        "ext": ".js"
                    },
                    {
                        "expand": true,
                        "cwd": "client/src/js",
                        "src": ["**/*.jsx"],
                        "dest": "client/dist/js/",
                        "ext": ".jsx"
                    }
                ]
            }
        },
        watch: {
            css: {
                files: ['client/src/sass/**/*.scss'],
                tasks: ['sass']
            },
            scripts: {
                files: ['client/src/js/**/*.js', 'client/src/js/**/*.jsx'],
                tasks: ['babel']
            }
        },
        browserify: {
            dev: {
                src: [
                    'client/dist/js/**/*.js',
                    'client/dist/js/**/*.jsx'
                ],
                dest: 'public/dist/js/bundle.js',
                options: {
                    debug: true,
                    watch: true,
                    keepAlive: true,
                    watchifyOptions: {
                        delay: 1000
                    }
                }
            },
            dist: {
                src: [
                    'client/dist/js/**/*.js',
                    'client/dist/js/**/*.jsx'
                ],
                dest: 'public/dist/js/bundle.js',
                options: {
                    debug: true,
                    watch: false,
                    keepAlive: false,
                    watchifyOptions: {
                        delay: 1000
                    }
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'public/dist/js/bundle.js': ['public/dist/js/bundle.js']
                }
            }
        },
        nodemon: {
            dev: {
                script: 'app.js',
                options: {
                    nodeArgs: ['--harmony'],
                    ignore: [
                        'node_modules/',
                        'public/',
                        'client/'
                    ]
                }
            }
        }

    });
    grunt.registerTask('client', ['sass', 'babel', 'browserify:dist', 'uglify']);
};
