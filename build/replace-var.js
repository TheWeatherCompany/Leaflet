const fs = require('fs');
const path = require('path');

let srcPath = path.resolve(__dirname, '../dist/leaflet-src.js');
let data = fs.readFileSync(srcPath).toString();

data = data.replace(/L\$1/gi, "L");

fs.writeFileSync(srcPath, data);