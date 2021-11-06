module.exports = {
    // 1 . Especificando el archivo de entrada
    entry: './client/index.js',
    // 2. Especificar el archivo
    output:{
        path: '/public',// 3. Ruta absoluta de la salida
        filename: 'bundle.js' // 4 Nombre del archivo de salida
    },
    devServer : {
        static : './public'
    }
}