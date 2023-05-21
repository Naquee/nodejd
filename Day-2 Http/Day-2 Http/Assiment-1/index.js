const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer((req, res) => {
    if(req.method === 'GET'){
        if(req.url==='/'){         
            fs.readdir(__dirname, 'utf8', (err, data)=> {
                if(err){
                    res.write(err)
                }else {
                    res.write(data)
                }
            });           
            res.end();
            
        }else if(req.url==='/public'){
            res.end('Welcome to public page!');
        }else if(req.url==='/public/other'){
            res.end('Welcome to other page!');
        }
    }
});

server.listen(port, () => {
    console.log(`listening on ${port}`);
})