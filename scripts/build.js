const sass = require('node-sass');
const glob = require('glob');
var fs = require('file-system');
var del = require('del');

const distFolder = './dist/';

const sassRender = file => {
  sass.render({
    file: file,
    outputStyle: 'expanded'
  }, function(error, result) { // node-style callback from v3.0.0 onwards
    if (!error) {
      let updateFile = file.replace('src/sass', 'dist/css').replace('.scss', '.css');
      // No errors during the compilation, write this result on the disk
      fs.writeFile(updateFile, result.css);
    }
  });
};

let files = glob.sync('./src/sass/style.scss');

del([distFolder]).then(paths => {
  let filesMap = files.map(file => {
    console.log(file);
    sassRender(file);
  });
});
