/* eslint-disable no-undef */

const fs = require('fs');
const esbuild = require('esbuild');
const postcss = require('esbuild-postcss');

esbuild.build({
    entryPoints: ['src/index.jsx'],
    bundle: true,
    sourcemap: 'inline',
    outfile: 'dist/bundle.js',
    minify: process.env.NODE_ENV === 'production',
    plugins: [
        postcss({
            config: './postcss.config.js',
        })
    ]
})
    .catch(() => process.exit(1))
    .finally(() => { // Executar a cópia após o build
        fs.copyFile('static/index.html', 'dist/index.html', (err) => {
            if (err) throw err;
            console.log('index.html copiado para dist/');
        });
    });
