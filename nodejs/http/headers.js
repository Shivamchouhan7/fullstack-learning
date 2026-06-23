const http = require("http");

const server = http.createServer((req, res) => {

    if(req.url === "/text"){
        //we can also use res.writeHead() to set the status code and headers
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });
        res.end("Text Response");
    }

    else if(req.url === "/html"){
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>HTML Response</h1>");
    }

    else if(req.url === "/json"){
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({
            message: "JSON Response"
        }));
    }

});

server.listen(3000);