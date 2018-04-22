var gulp = require('gulp'),
   nodemon = require('gulp-nodemon');
gulp.task('default', function () {
   nodemon({
       script: 'app.js',
       ext: 'js',
       env:{
           PORT: 8000
       },
       ignore: ['./node_modules/**']
   })
   .on('restart', function () {
       console.log('Restarting');
   });
});

// var gulp = require('gulp'),
//     nodemon = require('gulp-nodemon');

// gulp.task('default', defaultTask);

// function defaultTask(done) {
//   // place code for your default task here
//   done();
// }