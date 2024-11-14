const http = require("http");
const fs = require("fs");
com =  (req,res)=>{
if(req.url == "/a"){
  try{
 const a = fs.readFileSync("a.txt","UTF-8");
  //console.log(a);
  res.write(a);
  res.end();
  return;
  }catch(e){
  console.log(e);
  res.end();
  return;
  }
}
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
	const d = new Date();
	fs.appendFileSync("a.txt",`loaded ${n++} times\n ${d.getHours()} ${d.getMinutes()} ${d.getSeconds()} ${d.getTime()} \n\n`,"UTF-8");
       }catch(e){
        console.log(e);
	
	}
      	//console.log(`loaded ${n++} times`);
},10000);
const server = http.createServer(com);
server.listen(8080);
