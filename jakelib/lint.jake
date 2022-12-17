const cp = require('child_process');
const { desc, task } = require('jake');

function runLint() {
  cp.spawnSync('node_modules/.bin/eslint', ['src/'], {
    cwd: '.',
    detached: false,
    stdio: 'inherit',
  });
}

desc('check source code style with eslint');
task('lint', runLint);
