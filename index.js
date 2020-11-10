const express = require('express');
const app = new express();

var Request = require("request");

Request.get("https://val202.rtvslo.si/api/nowplaying?current_time=2019-04-05T12:21:02.566Z", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});

async function getData (){
    try{
          var rp = require ('request-promise-native');
          var options = {
          uri:'https://val202.rtvslo.si/api/nowplaying?current_time=2019-04-05T12:21:02.566Z',
          json:true
        };

        var response = await rp(options);
        return response;
    }catch(error){
        throw error;
    }        
}

app.get('/', function(request, response){
    //response.sendfile(__dirname + '/index.html');
});

// try{
//     console.log(getData());
// }catch(error){
//     console.log(error);
// }

app.listen('8888');