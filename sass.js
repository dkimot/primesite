const sass = require('node-sass');
const fs   = require('fs');

let sassArray = fs.readdirSync(process.cwd() + '/src/scss/');

sassArray.forEach((e) => {
  let css = e.split('.')[0];
  css += '.css';
  let path = process.cwd() + '/src/scss/' + e;
  let outPath = process.cwd() + '/src/css/' + css;
  sass.render({
    file: path
  }, function(err, result) {
    if (err) {
      console.error(err);
    } else {
      fs.writeFile(outPath, result.css, (err) => {
        if (err) {
          console.log("FS Error:");
          console.error(err);
        }
      });
    }
  });
});
