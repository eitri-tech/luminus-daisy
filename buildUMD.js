/* eslint-disable @typescript-eslint/no-var-requires */
const esbuild = require('esbuild');
const postcss = require('esbuild-postcss');
const tscPlugin = require('esbuild-plugin-tsc');
const { umdWrapper } = require("esbuild-plugin-umd-wrapper");

esbuild.build({
  entryPoints: ['src/index.ts'],
  platform: 'browser',
  format: 'iife',
  target: 'es2020',
  bundle: true,
  outfile: 'dist/luminusdaisy.umd.dev.js',
  format: 'umd',
  globalName: 'luminusdaisy',
  minify: false,
  sourcemap: 'inline',
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  plugins: [
    tscPlugin(),
    umdWrapper({libraryName: "luminusdaisy"}),
    postcss({
      config: './postcss.config.js',
    })
  ],
})
  .catch((error) => {
    console.log('Compile error');
    console.error(error);
    process.exit(1);
  });

esbuild.build({
  entryPoints: ['src/index.ts'],
  platform: 'browser',
  target: 'es2020',
  bundle: true,
  outfile: 'dist/luminusdaisy.umd.js',
  format: 'umd',
  globalName: 'luminusdaisy',
  minify: false,
  minifySyntax: false,
  minifyWhitespace: true,
  sourcemap: false,
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  plugins: [
    tscPlugin(),
    umdWrapper({libraryName: "luminusdaisy"}),
    postcss({
      config: './postcss.config.js',
    })
  ],
})
  .catch((error) => {
    console.log('Compile error');
    console.error(error);
    process.exit(1);
  });
