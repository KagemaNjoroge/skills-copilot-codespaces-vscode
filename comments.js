// create web server
// 1. import http module
const http = require('http');
const url = require('url');
const fs = require('fs');

// 2. create web server object
const server = http.createServer(function(req, res) {
    // 3. get request url
    const requestUrl = req.url;
    // 4. parse url
    const parsedUrl = url.parse(requestUrl, true);
    // 5. get path name
    const pathName = parsedUrl.pathname;
    // 6. get query string
    const queryString = parsedUrl.query;
    // 7. get http method
    const method = req.method;

    // 8. send response
    if (pathName === '/hello' && method === 'GET') {
        // 9. send response
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello World</h1>');
        res.end();
    } else if (pathName === '/hello' && method === 'POST') {
        // 10. send response
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello World</h1>');
        res.end();
    } else if (pathName === '/form' && method === 'GET') {
        // 11. send response
        fs.readFile('./form.html', function(err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('<h1>Not Found</h1>');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        });
    } else if (pathName === '/form' && method === 'POST') {
        // 12. send response
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello World</h1>');
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>Not Found</h1>');
        res.end();
    }
});

// 13. start server
server.listen(3000, function() {
    console.log('Server is running at 3000 port...');
});

//