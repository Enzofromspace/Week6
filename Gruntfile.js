module.exports = function(grunt) {

 // Project configuration.
 // Defines how and what is being done
 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   sass: {
   	dist: {
   	 	files: {
   	 		'css/style.css' : 'css/style.scss'
   	 	}
   		
   	}
   },
 watch: {
 	css:{
 		files: ['css/style.scss'],
 		tasks: ['sass', 'autoprefixer']
 		}
 	},
 	options: {
 		livereload: true
 	},
 	autoprefixer: {
 		options: {
 			browsers: ['last 5 version', 'ie 7', 'ie 8', 'ie 9']
 		},
 		no_dest: {
 			src: 'css/style.css'
 		}
 	},
 	connect: {
 		server: {
 			options: {
 				port: 9001,
 				base: ''
 			}
 		}
 	},
 	svginject: {
 		all : {
 			options:{},
 			files:{
 				'svg/SVGinject.js': ['svg/*.svg'],
 			}
 		}
 	}
 });

 grunt.loadNpmTasks('grunt-contrib-sass');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-autoprefixer');
 grunt.loadNpmTasks('grunt-contrib-connect');
 grunt.loadNpmTasks('grunt-svginject');

 // Default task(s).  Make sure names match
 grunt.registerTask('default', ['svginject', 'connect','watch']);
};