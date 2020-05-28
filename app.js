const argv = require('./config/yargs').argv;
const color = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no válido');
}



// let base = 9;
// let argv = process.argv;
// let parametro = argv[2];
// base = parametro.split('=')[1]
// let argv2 = process.argv;
// console.log(argv.limite);
// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo}`));