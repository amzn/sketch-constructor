const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs-extra');
const {execSync} = require('child_process');

const MODELS_PATH = './docs/models.md';
const models = jsdoc2md.renderSync({
  files: ['./models/**/*.js'],
  // 'no-gfm': true,
  separators: true,
  showMainIndex: false,
  partial: [
    'scripts/handlebars/main.hbs',
    'scripts/handlebars/header.hbs',
    'scripts/handlebars/sig-name.hbs',
    'scripts/handlebars/body.hbs',
  ],
});

fs.ensureFileSync(MODELS_PATH);
fs.writeFileSync(MODELS_PATH, models);
execSync(`git add ${MODELS_PATH}`);
console.log(`${MODELS_PATH  } generated.`);

const UTILS_PATH = './docs/utils.md';
const utils = jsdoc2md.renderSync({
  files: ['./utils/**/*.js'],
  // 'no-gfm': true,
  separators: true,
  partial: [
    'scripts/handlebars/main.hbs',
    'scripts/handlebars/header.hbs',
    'scripts/handlebars/sig-name.hbs',
    'scripts/handlebars/body.hbs',
  ],
});

fs.ensureFileSync(UTILS_PATH);
fs.writeFileSync(UTILS_PATH, utils);
execSync(`git add ${UTILS_PATH}`);
console.log(`${UTILS_PATH  } generated.`);
