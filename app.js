const http = require("http");
const greeting = require("./greeting"); 

const json = {
    name: '123'
}
http.createServer(function(requect, res){
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Allow-Headers': 'origin, content-type, accept',
        'Access-Control-Max-Age': 2592000, // 30 days
        /** add other headers as per requirement */
      };
    if (requect.url = '/auth') {
        
    }
    if (['GET', 'POST'].indexOf(requect.method) > -1) {
        res.writeHead(200, headers);
        res.end(JSON.stringify(json));
        return;
    }
    res.writeHead(405, headers);
    res.end("Hello NodeJS!");

}).listen(3000, "127.0.0.1", function() {
    console.log("СЕРВЕР НАЧАЛ ПРОСЛУШИВАНИЕ ЗАПРОСОВ НА ПОРТУ 3000")
})              
