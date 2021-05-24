const fs =require("fs");
//console.log("started");

//fs.readFile('./sample.txt',(err,data)=>{
   // console.log(err)
  ///  console.log(data.toString())
//})
//console.log("completed");

const readStream = fs.createReadStream('./sample.txt')

readStream.on('data',partofData=>{
    console.log(partofData.toString());
})

readStream.on('data',partofData=>{
    console.log("completed");
}) 