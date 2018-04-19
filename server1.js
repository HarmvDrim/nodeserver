var http = require('http');

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

http.createServer(onRequest).listen(3000);

console.log("Server op port 3000");
