const fs = require('fs')
// const fileName = '../test.json';
// const file = require(fileName);
// file.ok = {
//   id:'3',
//   value:'jojo'
// };
    
// fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
//   if (err) return console.log(err);
//   console.log(JSON.stringify(file));
//   console.log('writing to ' + fileName);
// });

// var jsonObj = [{'Id':'1','Username':'Ray','FatherName':'Thompson'},  
//                {'Id':'2','Username':'Steve','FatherName':'Johnson'},
//                {'Id':'3','Username':'Albert','FatherName':'Einstein'}];

// for (var i=0; i<jsonObj.length; i++) {
//   if (jsonObj[i].Id == 3) {
//     jsonObj[i].Username = "Thomas";
//     break;
//   }
// }
let test = fs.readFile('../test.json', 'utf-8', (err, data)=>{
  console.log(data.toString());
})