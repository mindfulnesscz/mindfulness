'use strict';

module.exports = function ( grunt ) {

  grunt.initConfig( {
    sass: {
      dist: {
        options: {
          style: 'compressed',
          compass: false,
          sourcemap: false,
          loadPath: ['./', 'node_modules']
        },
        files: {
          '../assets/css/mindfulness.css': [
            'src/sass/mindfulness.scss'
          ],
          '../assets/css/mindfulness-backend.css': [
            'src/sass/mindfulness-backend.scss'
          ],
          '../assets/css/home-banner.css': [
            'src/sass/home-banner.scss'
          ],
          '../assets/css/wm-spacing.css': [
            'src/sass/spacing.sass'
          ]
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },

      sass: {
        files: [
          'src/sass/**/*.sass',
          'src/sass/**/*.scss'
        ],

        tasks: ['sass']
      },
    },

    clean: {
      dist: [
        'assets/css/*.css',
      ]
    }
  } );



  // Load tasks

  grunt.loadNpmTasks( 'grunt-contrib-clean' );

  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  grunt.loadNpmTasks( 'grunt-contrib-sass' );



  // Register tasks

  grunt.registerTask( 'default', [

    'clean',

    'sass',

  ] );

  grunt.registerTask( 'dev', [

    'watch'

  ] );



};