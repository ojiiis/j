const http = require("http");
const fs = require("fs");
com = (req,res)=>{
res.statusCode = 200;
res.write("hello world");
res.end();
}
var n = 0;
setInterval(async ()=>{
  try{	
	const req = await fetch('http://localhost:8080');
	const res = await req.text();
	console.log(res);
	await fs.appendFileSync("a.txt",`loaded ${n++} times\n`,"UTF-8");
       }catch(e){
        console.log(e);
	
	}
      	console.log(`loaded ${n++} times`);
},10000);
const server = http.createServer(com);
server.listen(8080);
