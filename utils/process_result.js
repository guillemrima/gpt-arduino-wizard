const fs = require('fs');

const writeFile = async(result) => {
    fs.writeFile('./src/main.ino', result, (err) => {
        if(err){
            return err
        }else{
            return "Código escrito correctamente"
        }
    })
}

module.exports = writeFile;