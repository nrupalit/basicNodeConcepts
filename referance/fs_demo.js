const fs = require('fs');
const path = require('path');

//Create Folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('Folder is Created.')
});


//create and write to file 
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world\n', err => {
    if (err) throw err;
    console.log('File is created..');

    //to append file
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love node.js', err =>{
        if(err) throw err;
        console.log('File Append');
    });
});


//Read File
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
})


//Rename File 
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'newFile.txt'), (err, data)=>{
    if(err) throw err;
    console.log(data);
})