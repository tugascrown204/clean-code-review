const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const args = process.argv.slice(2);
const codePath = args[0] || '.';

if (!args[0]) {
  console.error('Please provide a path to the code, using `node cli.js <path>`');
  process.exit(1);
}

if (!fs.existsSync(codePath)) {
  console.error('The provided path does not exist.');
  process.exit(1);
}

exec(`eslint ${path.resolve(codePath)}`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error executing ESLint: ${stderr || 'unknown error'}`);
    process.exit(1);
  }
  console.log(stdout);
});