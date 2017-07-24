const fileSys = require('file-system');
const fs = require('fs');





module.exports = {

  peopleOneReader: (filePath) => { //WARNING ARROW FUNCTION COULD CAUSE ERROR. READ DOC
    return new Promise(function(resolve, reject) {
      fs.readFile(filePath, 'utf-8', function(err, data) {
        if (err) {
          reject('An error has been thrown: Line25');
        } else {
          resolve(JSON.parse(data));
        }
      });
    });
  },

  peopleTwoReader: (filePathTwo) => {
    return new Promise(function(resolve, reject) {
      fs.readFile(filePathTwo, 'utf-8', (err, data) => { 
        if (err) {
          reject('An error has occured');
        } else {
          resolve(JSON.parse(data));
        }
      });
    })
  }


}
