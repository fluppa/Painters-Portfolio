import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import mozjpeg from 'imagemin-mozjpeg'
import imageResize from 'gulp-image-resize'
import gm from 'gulp-gm'
import scaleImage from 'gulp-scale-images'

let qual = 5

function architecture() {
  gulp
    .src('resources/img/paintings/architecture/**/*')
    /*.pipe(
      imageResize({
        width: 15,
        height: 15,
        percentage: true,
      })
    )*/
    .pipe(imagemin([mozjpeg({ quality: qual, progressive: true })]))
    .pipe(gulp.dest('resources/img-min/paintings/architecture'))
}

function murals() {
  gulp
    .src('resources/img/paintings/murals/**/*')
    .pipe(imagemin([mozjpeg({ quality: qual, progressive: true })]))
    .pipe(gulp.dest('resources/img-min/paintings/murals'))
}

function paintings() {
  gulp
    .src('resources/img/paintings/oil_paintings/**/*')
    .pipe(imagemin([mozjpeg({ quality: qual, progressive: true })]))
    .pipe(gulp.dest('resources/img-min/paintings/oil_paintings'))
}

function drawings() {
  gulp
    .src('resources/img/paintings/drawings/**/*')
    .pipe(imagemin([mozjpeg({ quality: qual, progressive: true })]))
    .pipe(gulp.dest('resources/img-min/paintings/drawings'))
}

export default () => {
  //paintings()
  //architecture()
  //drawings()
  //murals()
}
