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
      options: {
        force: true // because the folder it's outside of working directory ( this is because we use dev folder for development stacks. Maybe it's time to get rid of this )
      },
      dist: [
        '../assets/css/*.css',
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