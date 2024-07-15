/* eslint-disable no-undef */

const chokidar = require('chokidar');
const { exec } = require('child_process');
const path = require('path');

exec('node build.js', (error, stdout) => {
    if (error) {
        console.error(`Build error: ${JSON.stringify(error)}`);
        return;
    }
    console.log(stdout);
});

const project = path.join(__dirname, 'src')
const library = path.join(__dirname, '..', 'dist')

chokidar
    .watch([project, library])
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
