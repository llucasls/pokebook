const cp = require('child_process');
const { desc, task } = require('jake');

function handleSIGINT() {
  process.exitCode = 130;
}

// TODO: create a teardown task to be invoked on handleExit
// function handleExit() {
// }

function runStart() {
  process.on('SIGINT', handleSIGINT);
  // process.on('exit', handleExit);

  cp.spawnSync('node_modules/.bin/react-scripts', ['start'], {
    cwd: '.',
    detached: false,
    stdio: 'inherit',
  });
}

desc('start application');
task('start', runStart);
