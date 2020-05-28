const fs = require('fs');
const color = require('colors');


let listarTabla = (base, limite) => {

    console.log('========================'.green);
    console.log(`===== tabla del ${base} =====`.green);
    console.log('========================'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${i * base}\n`);
    }
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        let data = '';




        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i * base}\n`;
        }

        fs.writeFile(`tablas/Tabla del ${base} al ${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`La tabla del ${base}-al ${limite} ha sido guardada`)

        });

    })



}

module.exports = {
    crearArchivo,
    listarTabla
}