const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const { task } = require('jake');

class SrcDir {
  static files = [];

  static isDir = (file) => fs.statSync(file).isDirectory() || false;

  static isLess = (file) => /^.+\.less$/.test(file);

  static isCss = (file) => /^.+\.css$/.test(file);

  static getFiles(target) {
    try {
      if (SrcDir.isDir(target)) {
        fs.readdirSync(target).forEach((file) => {
          SrcDir.getFiles(path.join(target, file));
        });
      } else {
        SrcDir.files.push(path.join(target));
      }
    } catch (error) {
      const { name, message } = error;
      console.error(`${name}: ${message}`);
    }
  };

  static listFiles() {
    SrcDir.files = [];
    SrcDir.getFiles('src');
    return SrcDir.files ;
  }

  static compileLess() {
    const lessc = 'node_modules/.bin/lessc';
    const lessFiles = SrcDir.listFiles().filter(SrcDir.isLess);
    const cssFiles = SrcDir.listFiles().filter(SrcDir.isCss);
    SrcDir.files = cssFiles
      .filter((file) => !lessFiles.includes(file.replace('less', 'css')));

    lessFiles.forEach((file) => {
      cp.execFile(lessc, [file, file.replace('less', 'css')],
        SrcDir.handleCompileLess);
    });
  }

  static handleCompileLess(err, stdout, stderr) {
    if (err) {
      throw err;
    }

    console.log(stdout);
  }

  static deleteCss() {
    const preservedCss = SrcDir.files;
    const cssFiles = SrcDir.listFiles()
      .filter(SrcDir.isCss)
      .filter((file) => !preservedCss.includes(file));

    cssFiles.forEach((file) => {
      fs.unlink(file, SrcDir.handleDeleteCss);
    });
  }

  static handleDeleteCss(err) {
    if (err) {
      throw err;
    }
  }
}

task('setup', SrcDir.compileLess);
task('teardown', SrcDir.deleteCss);
