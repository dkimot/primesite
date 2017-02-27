const fs = require('fs');

const renderFiles = () => {
  let components = fs.readdirSync('./src/app/components');
  let finalComponents = [];
  let file = '';

  // Render each component
  for (let i = 0; i < components.length; i++) {
    let component = fs.readFileSync('./src/app/components/' + components[i]).toString();
    let quoteInComp = true;
    let w = 0;
    let result = '';
    while (quoteInComp) {
      let quoteIndex = component.indexOf('\'');
      if (quoteIndex != -1) {
        result += component.slice(0, quoteIndex) + '\\' + component.slice(quoteIndex, quoteIndex + 1);
        component = component.slice(quoteIndex + 1);
      } else {
        result += component;
        quoteInComp = false;
      }
    }
    result = result.replace(/[^\x20-\x7E]/gmi, "");
    let filename = components[i].slice(0, components[i].indexOf('.'));
    file += 'var ' + filename + ' = \'' + result + '\'\n';
    finalComponents.push(filename + ' : ' + filename + ',\n');
  }
  file += '\nvar components = {\n' + finalComponents + 'null: \'null\'\n}';
  fs.writeFileSync('./src/js/components.js', file);
}

renderFiles();
