module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    jshint: {
      src: ["src/js/**/*.js","!src/js/_bower.js"]
    },
    bower_concat: {
      all: {
        dest: {
          'js': 'src/js/_bower.js'
        },
      },
    },
    sass: {
      expanded: {
        options: {
          outputStyle: "expanded"
        },
        files: { "app/css/app.css": "src/scss/app.scss" }
      },
      compressed: {
        options: {
          outputStyle: "compressed"
        },
        files: { "app/css/app.min.css": "src/scss/app.scss" }
      }
    },
    concat: {
      dist: {
        src: ['src/js/_bower.js','src/js/app.js', 'src/js/**/*.js'],
        dest: "app/js/app.js"
      },
    },
    uglify: {
      'app/js/app.min.js': 'app/js/app.js',
    },
    watch: {
      configFiles: {
        files: ['Gruntfile.js', 'package.json'],
        options: { reload: true }
      },
      scss: {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass'],
        options: { livereload: true }
      },
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['jshint', 'concat', 'uglify'],
        options: { livereload: true }
      },
      index: {
        files: ['app/index.html'],
        options: { livereload: true }
      }
    }
  });

  require("load-grunt-tasks")(grunt);

  grunt.registerTask("default", ["jshint","bower_concat","sass","concat","uglify", "watch"] );

};
