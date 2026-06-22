const http=require("http");
const url=require("url");

// Handling Query Parameter by url.parse()
const server=http.createServer((req,res)=>{
    const parsedUrl=url.parse(req.url,true);
    if(parsedUrl.pathname==='/'){
        res.end("Home page");
    }
    else if(parsedUrl.pathname==='/about'){
        const id = parsedUrl.query.id;
        res.end(`About page ,ID${id}`);
    }
    else{
        res.statusCode=404;
        res.end("Page not found");
    }
});

// handling Query Parameter by URL class
const server2=http.createServer((req,res)=>{
    const parsedUrl=new URL(req.url,`http://${req.headers.host}`);
    if(parsedUrl.pathname==='/'){
        res.end("Home page");
    }
    else if(parsedUrl.pathname==='/about'){
        const id = parsedUrl.searchParams.get('id');
        res.end(`About page ,ID${id}`);
    }
    else {
        res.statusCode=404;
        res.end("Page not found");
    }
});

server.listen(3000);