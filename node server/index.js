const http = require("http")

http.createServer((req,res)=>{
    res.write("server started @ 9000");
    res.end();

}).listen(9000);