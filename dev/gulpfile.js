/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */

const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' )( require( 'sass' ) );
const del = require( 'del' );
const plumber = require( 'gulp-plumber' );
const autoprefixer = require( 'gulp-autoprefixer' );
const sourcemaps = require( 'gulp-sourcemaps' );

const sassSourcePath = ['src/theme-mindfulness/mindfulness.scss', 'src/theme-mindfulness/mindfulness-backend.scss', 'src/theme-mindfulness/home-banner.scss' ];
const cssDestPath = '../assets/css';

sass.compiler = require( 'node-sass' );

gulp.task( 'styles', () => {
	return gulp
		.src( sassSourcePath )
		.pipe( sourcemaps.init() )
		.pipe(
			sass
				.sync( {
					includePaths: [ 'node_modules' ],
					outputStyle: 'compressed',
				} )
				.on( 'error', sass.logError )
		)
		.pipe( plumber() )
		.pipe(
			autoprefixer( {
				overrideBrowserslist: [ 'last 2 version', '> 5%' ],
			} )
		)
		.pipe( sourcemaps.write( '.' ) )
		.pipe( gulp.dest( cssDestPath ) );
} );

gulp.task( 'clean', () => {
	return del(
		[
			'../assets/css/mindfulness.css',
			'../assets/css/mindfulness.css.map',
			'../assets/css/mindfulness-backend.css',
			'../assets/css/mindfulness-backend.css.map',
		],
		{
			force: true, // wm: cleans outside of current project directory otherwise throws error
		}
	);
} );

gulp.task( 'watch', () => {
	gulp.watch(
		[
			'src/theme-mindfulness/**/*.sass',
			'src/theme-mindfulness/**/*.scss',
		],
		( done ) => {
			gulp.series( [ 'clean', 'styles' ] )( done );
		}
	);
} );

gulp.task( 'default', gulp.series( [ 'clean', 'styles' ] ) );
