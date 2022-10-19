const cp = require('child_process');
const { desc, task } = require('jake');

function handleSIGINT() {
  process.exitCode = 130;
}

function runStart() {
  process.on('SIGINT', handleSIGINT);

  cp.spawnSync('node_modules/.bin/react-scripts', ['start'], {
    cwd: '.',
    detached: false,
    stdio: 'inherit',
  });
}

desc('start application');
task('start', runStart);
task('default', ['start']);
