//const { options } = require('yargs');
const {crearArchivo} = require('./helpers.js/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');


console.clear();


console.log(argv);

crearArchivo(argv.b, argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));

