const fileSys = require('file-system');
const fs = require('fs');


module.exports = {
  peopleOneReader: (filePath1, filePath2) => { //WARNING ARROW FUNCTION COULD CAUSE ERROR. READ DOC
    return new Promise(function(resolve, reject) {
      fs.readFile(filePath1, 'utf-8', function(err, data1) {
        fs.readFile(filePath2, 'utf-8', (err, data2) => {
          let sortedData = JSON.parse(data1);
          let sortedData2 = JSON.parse(data2);
          let combinedData = sortedData.concat(sortedData2);
        if (err) {
          reject('An error has been thrown: Line25');
        } else {
          resolve(combinedData);
        }
      });
    });
  })
  // peopleTwoReader: (filePath) => {
  //   return new Promise(function(resolve, reject) {
  //     fs.readFile(filePath, 'utf-8', (err, data) => {
  //       if (err) {
  //         reject('An error has occured');
  //       } else {
  //         resolve(JSON.parse(data));
  //       }
  //     });
  //   })
  // }


}
 }
