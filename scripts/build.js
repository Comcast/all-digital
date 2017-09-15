const sass = require('node-sass');
const glob = require('glob');
const fs = require('file-system');
const del = require('del');
const read = require('read-file');

const distFolder = './dist/';

const sassRender = (data, name) => {
  sass.render({
    data: data,
    outputStyle: 'expanded'
  }, function(error, result) { // node-style callback from v3.0.0 onwards
    if (!error) {
      let updateFile = name.replace('src/sass', 'dist/css').replace('.scss', '.css');
      // No errors during the compilation, write this result on the disk
      fs.writeFile(updateFile, result.css);
    } else {
      console.error(error);
    }
  });
};

let files = glob.sync('./src/sass/all-digital/{base/*,components/*}.scss');

del([distFolder]).then(paths => {
  files.map(file => {
    let name = file.replace('_', '');
    let data = "@import './src/sass/xfinity_standard_fonts';\n@import './src/sass/all-digital/utils';\n" + read.sync(file, {encoding: 'utf8'});
    sassRender(data, name);
  });
});
