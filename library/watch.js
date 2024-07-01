const chokidar = require('chokidar');
const { exec } = require('child_process');

chokidar
    .watch(['src'], { ignored: /(^|[\/\\])\../ })
    .on('all', (event, path) => {
        exec('node build.js', (error, stdout, stderr) => {
            if (error) {
                console.error(`Erro ao executar o build: ${error}`);
                return;
            }
            console.log(`Build executado com sucesso: ${stdout}`);
        });
    });
