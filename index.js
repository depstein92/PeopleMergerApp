const fileSys = require('file-system');
const fs = require('fs');
const userInput = process.argv[2];
const fileReader = require('./fileReader.js');



fileReader.peopleOneReader('./people1.json', './people2.json').then(function(data) { //Killian, Koen, Ashlee
  let sortedData = data.sort();
  fs.writeFile('sortPeopleList.txt', sortedData, (err) => {
    if(err){
      console.log('An error has been thrown; Line 10');
    }
      //console.log(parsedData);
      console.log('successfully executed written file: ' + sortedData);

  });

})

// fileReader.peopleTwoReader('./people2.json').then(function(data){ // "Sara", "Alex", "Loet", "Thirsa", "Inessa"
//   let dataHandler = data.sort();
//   fs.writeFile('sortPeopleList.txt', data, (err) => {
//     if(err){
//       console.log('An error has occured, thrown at line 25')
//     }
//     console.log('successfully executed written file: ' + dataHandler);
//   })
// })
