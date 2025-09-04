const { exec } = require('child_process');
const path = require('path');

const args = process.argv.slice(2);
const codePath = args[0] || '.';

if (!args[0]) {
  console.error('Please provide a path to the code, using `node cli.js <path>`');
  process.exit(1);
}

exec(`eslint ${path.resolve(codePath)}`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error executing ESLint: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout);
});