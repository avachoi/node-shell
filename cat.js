function cat(fileName){
  const fs = require("fs");

  fs.readFile(`./${fileName}`, function (err, content){
    if(err) {}
    else {
      console.log(content.toString())
      process.stdout.write("\nprompt > "); //prompt
    }
  })
}

module.exports = cat;
