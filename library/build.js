/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const postcss = require('esbuild-postcss');
const { clean } = require('esbuild-plugin-clean');
const tscPlugin = require('esbuild-plugin-tsc');

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outdir: 'dist',
  platform: 'browser',
  format: 'cjs',
  globalName: 'luminusdaisy',
  minify: process.env.ENVIRONMENT === "prod",
  sourcemap: process.env.ENVIRONMENT !== "prod" ? 'inline' : false,
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  plugins: [
    clean({
      patterns: ['./dist/*'],
    }),
    tscPlugin(),
    postcss({
      config: './postcss.config.js',
    })
  ],
})
  .catch((error) => {
    console.log('Compile error')
    console.error(error)
    process.exit(1)
  })
  .finally(() => {
    fs.copyFile(
      path.join('dist', 'index.css'),
      path.join('../examples/dist', 'luminus.css'),
      (err) => {
        if (err) {
          console.error('File copy error:', err);
        }
      });
  });
