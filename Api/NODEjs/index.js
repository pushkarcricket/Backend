const fs = require ('node:fs');

const folderName= "/Api/run/test";


    if(!fs.existsSync (folderName)){
       console.log( fs.mkdirSync(folderName))
    }else{
        console.log(err)
    }
