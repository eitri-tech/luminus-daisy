/* eslint-disable @typescript-eslint/no-var-requires */
const chokidar = require('chokidar');
const { exec } = require('child_process');

console.log("First Build")
exec('node build.js', (error, stdout) => {
    if (error) {
        console.error(`Build error: ${error}`);
        return;
    }
    console.log(stdout);
});

console.log("Watching file changes...")
chokidar
    .watch(['src'], { ignored: /(^|[\/\\])\../ })
    .on('change', (a) => {
        console.log(`⚠️ File [${a}] was changed`)
        exec('node build.js', (error, stdout) => {
            if (error) {
                console.error(`Build error: ${error}`);
                console.log(stdout)
                return;
            }
            console.log(stdout);
        });
    });
