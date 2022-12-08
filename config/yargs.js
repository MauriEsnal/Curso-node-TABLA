const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla.'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Si escribo L, muestra la tabla.'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        describe: 'Si hasta que numero va la tabla.'
    })
    .check((argv, options) =>{
        if(isNaN(argv.b)){
            throw 'la base tiene que ser un numero.'
        }
        return true;
    })
    .argv;

    module.exports = argv;