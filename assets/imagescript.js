const fs = require('fs');
const files = fs.readdirSync('./images').filter(x => {
  if ((!x.endsWith('@2x.png')) && (!x.endsWith('@3x.png'))) {
    return x.includes('png')
  }
}
);
const ex =
  '{\n' +
  files.map(x => `"${x.split('.png')[0]}": require("./${x}"),`).join('\n') +
  '}';
const res = 'export default ' + ex;
fs.writeFileSync('./index.js', res);
