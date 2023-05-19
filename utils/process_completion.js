const fs = require('fs');

function writeFile(completion) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./src/src.ino', completion, (err) => {
            if (err) {
            reject(err);
            } else {
            resolve(" ✔ Petición realizada correctamente");
        }
    });
    });
}


module.exports = writeFile;