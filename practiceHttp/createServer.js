const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
})
 .listen(8080);

 server.on('listening', () => {
     console.log('8080번에서 서버 대기 중입니다');
 });
 server.on('error', error => {
     console.log(error);
 })