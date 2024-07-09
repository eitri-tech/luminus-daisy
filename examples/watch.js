/* eslint-disable no-undef */

const chokidar = require('chokidar');
const { exec } = require('child_process');

exec('node build.js', (error, stdout) => {
    if (error) {
        console.error(`Build error: ${JSON.stringify(error)}`);
        return;
    }
    console.log(stdout);
});

chokidar
    .watch(['src', '../library/dist'], { ignored: /(^|[/\\])\../ })
    .on('change', (a) => {
        console.log(`⚠️ File [${a}] was changed`)
        // exec('eslint ./src/**/*.jsx', (error) => {
        //     if (error) {
        //         console.error(`ESLint error: ${JSON.stringify(error)}`);
        //         return;
        //     }
            
        // });
        exec('node build.js', (error, stdout) => {
            if (error) {
                console.error(`Build error: ${JSON.stringify(error)}`);
                return;
            }
            console.log(stdout);
        });
    });
