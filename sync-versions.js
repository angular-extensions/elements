const fs = require('fs');
const version = require('./package.json').version;

const LOG_PREFIX = 'Sync versions -';
const INNER_PACKAGE_JSON_PATH = './projects/elements/package.json';

const innerPackageJson = require(INNER_PACKAGE_JSON_PATH);

console.log(LOG_PREFIX, 'found version: ', version);

innerPackageJson.version = version;

fs.writeFileSync(INNER_PACKAGE_JSON_PATH, JSON.stringify(innerPackageJson, null, 2));

console.log(LOG_PREFIX, 'success');


