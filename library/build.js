const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const postcss = require('esbuild-postcss');
const { clean } = require('esbuild-plugin-clean');
const { umdWrapper } = require("esbuild-plugin-umd-wrapper");

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outdir: 'dist',
  platform: 'browser',
  format: 'umd',
  globalName: 'luminus',
  minify: true,
  sourcemap: true,
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  plugins: [
    clean({
      patterns: ['./dist/*'],
    }),
    postcss({
      config: './postcss.config.js',
    }),
    umdWrapper({
      libraryName: "luminus", 
      external: "inherit", 
      amdLoaderName: "luminus"
    })
  ],
})
  .catch((error) => {
    console.log('Erro ao compilar')
    console.error(error)
    process.exit(1)
  })
  .finally(() => {
    const origin = path.join('dist', 'index.css');
    const output = path.join('../examples/dist', 'luminus.css');

    fs.copyFile(origin, output, (err) => {
      if (err) {
        console.error('Erro ao copiar o arquivo:', err);
      } else {
        console.log('Arquivo copiado com sucesso!');
      }
    });
  });
