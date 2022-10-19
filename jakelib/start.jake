const cp = require('child_process');
const { desc, task, Task } = require('jake');

function handleSIGINT() {
  process.exitCode = 130;
}

function handleExit() {
  Task.teardown.execute();
}

function runStart() {
  process.on('SIGINT', handleSIGINT);
  process.on('exit', handleExit);

  cp.spawnSync('node_modules/.bin/react-scripts', ['start'], {
    cwd: '.',
    detached: false,
    stdio: 'inherit',
  });
}

desc('start application');
task('start', ['setup'], runStart);
