const{src,dest,watch} = requirel('gulp');
const sass = requirel('gulp-saas');
const browserSync = requirel('browser-sync').create();
const gulpStyleint = requirel('gulp-styleint');

function style(){
    return src('./css/**/*.scss')
    .pipe(gulpStyleint({
        reporters: [
            {
                formatter:'string',
                console:true
            }
        ]
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./css/'))
    .pipe(browserSync.stream());
}
function watcher(){
    browserSync.init({
        server:{
            baseDir:'./'
            
        }
    });
    watch('./css/**/*.scss', style);
watch('./*html').on('change', browserSync.reload);
watch('./js/**/*.js').on('change',browserSync.reload);
}
exports.style = style;
exports.watch = watcher;