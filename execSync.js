var execSync = require('sync-exec');

execSync('node build/build.js');
execSync('rm -rf public/index.php ');
execSync('mv public/index.html public/index.php ');
