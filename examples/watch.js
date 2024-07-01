/* eslint-disable no-undef */

const chokidar = require('chokidar');
const { exec } = require('child_process');

chokidar
    .watch(['src', '../library/dist'], { ignored: /(^|[/\\])\../ })
    .on('all', () => {
        // exec('eslint ./src/**/*.jsx', (error) => {
        //     if (error) {
        //         console.error(`ESLint error: ${JSON.stringify(error)}`);
        //         return;
        //     }
            
        // });
        exec('node build.js', (error, stdout) => {
            if (error) {
                console.error(`Erro ao executar o build: ${JSON.stringify(error)}`);
                return;
            }
            console.log(`Build executado com sucesso: ${stdout}`);
        });
    });
