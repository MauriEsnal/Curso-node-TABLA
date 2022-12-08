const FileSystem = require('fs');
require('colors');

const crearArchivo = async (base = 5, listar=false, hasta = 10) => {
    

    try {       

    let salida = '';
    let consola = '';

    for (let i=1; i<= hasta;i++){
       salida += `${base} x ${i} = ${base * i}\n`;
       consola += `${base} ${'x'.red} ${i} = ${base * i}\n`;
    }
    if (listar){
        console.log(`=====================`.bgBrightRed);
        console.log(`Tabla del :`.bold, base);
        console.log(`=====================`.bgBrightRed);
        console.log(consola);

    }

    FileSystem.writeFileSync(`./salida/tabla-${base}.txt`, salida);

     return `tabla-${base}.txt`;

    } catch (error){
       throw error;
    }
            
    

    

}

module.exports = { crearArchivo}