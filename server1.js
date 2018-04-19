var http = require('http');

const port = process.env.PORT  || 3000

function onRequest(request, response){
    console.log('Er was een request!');
    response.writeHead(200, {'Content-Type' : 'application/json'});
    let json = {
        firstname : 'test',
        lastname : 'schellius'
    };
    response.write(JSON.stringify(json));
    response.end();
}

http.createServer(onRequest).listen(port);

console.log("Server op port " + port);
