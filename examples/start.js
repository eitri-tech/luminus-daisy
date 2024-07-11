/* eslint-disable no-undef */
const browserSync = require('browser-sync').create();

browserSync.init({
  server: 'dist',
  files: 'dist/*', // Observar todos os arquivos dentro de dist
  port: 3000, // Porta do servidor (opcional, padrão: 3000)
  open: false, // Abrir o navegador automaticamente (opcional)
});
