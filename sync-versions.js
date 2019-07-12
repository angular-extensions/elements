const fs = require('fs');
const version = require('./package.json').version;

const INNER_PACKAGE_JSON_PATH = './projects/elements/package.json';

const innerPackageJson = require(INNER_PACKAGE_JSON_PATH);

innerPackageJson.version = version;

fs.writeFileSync(INNER_PACKAGE_JSON_PATH, JSON.stringify(innerPackageJson, null, 2));
