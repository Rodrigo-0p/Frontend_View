const { build  }   = require('esbuild');

const REACT_APP_TITULO    ="Menayo Barber"
const REACT_APP_DATA_URL  = 'http://192.168.100.12:4000/public/1/data/'
const REACT_APP_IMAGE_URL = 'http://192.168.100.12:4000/public/1/img/'
const REACT_APP_BASEURL   = 'http://192.168.100.12:4000'

build({  
  entryPoints: ['src/index.js'],
  bundle: true,
  outfile: 'build/Bundle.js',
  loader: {
    '.js': 'jsx', // Configuración para cargar archivos .js como JSX
    '.css': 'css',
    '.png': 'file', // Configuración para cargar archivos .png como archivos
    '.ttf': 'file', // Configuración para cargar archivos .ttf como archivos
    '.svg': 'file', // Configuración para cargar archivos .svg como archivos
    '.woff': 'file', // Configuración para cargar archivos .woff como archivos
    '.woff2': 'file' // Configuración para cargar archivos .woff2 como archivos
  },
  define: {
    'process.env.REACT_APP_TITULO'    : JSON.stringify(REACT_APP_TITULO)   ,
    'process.env.REACT_APP_BASEURL'   : JSON.stringify(REACT_APP_BASEURL)  ,
    'process.env.REACT_APP_DATA_URL'  : JSON.stringify(REACT_APP_DATA_URL) , 
    'process.env.REACT_APP_IMAGE_URL' : JSON.stringify(REACT_APP_IMAGE_URL)     
  },
  format: 'cjs',       // Formato de salida
  minify: true,        // Minificar el código
  minifyIdentifiers:true, // Cambia la variable en nombres mas corto
  minifySyntax:true,
  sourcemap: false     // Generar sourcemap
}).catch(() => process.exit(1));