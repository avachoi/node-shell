function curl(site){
  const request = require('request')

  request(site, function(err, response, body){
    if(err){
    }
    else {
      console.log(body)
      process.stdout.write("prompt > ");
    }
  })
}

module.exports = curl;
