const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer((req, res) => {
    if(req.method === 'GET'){
        if(req.url==='/textsync'){
           const data = fs.readFileSync('./text.txt', 'utf8');
           res.end(data);
        }else if(req.url==='/textasync'){
            fs.readFile('./text.txt', 'utf8', (err, data)=> {
                if(err){
                    console.worn(err);
                }else{
                    res.end(data);
                }
            });
        }else if(req.url==='/textstream'){
            const myReadStream = fs.createReadStream(`./text.txt`, 'utf-8');
            myReadStream.on('data', (chunk)=> {
                res.end(chunk);
            });
        }else if(req.url==='textpromise'){
            

        }
    }
});

server.listen(port, () => {
    console.log(`listening on ${port}`);
})