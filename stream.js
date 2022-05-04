const fs = require("fs");

// stream
let writeableStream = fs.createWriteStream("hello.txt");
writeableStream.write("Привет мир!");
writeableStream.write("Продолжение записи \n");
writeableStream.end("Завершение записи");
let readableStream = fs.createReadStream("hello.txt", "utf8");
 
readableStream.on("data", function(chunk){ 
    console.log(chunk);
});
//pipe 
 
let writeableStream2 = fs.createWriteStream("some2.txt");
readableStream.pipe(writeableStream2);

// zip

// const zlib = require("zlib");
// let writeableStream3 = fs.createWriteStream("hello.txt.zip");

// let gzip = zlib.createGzip();
      
// readableStream.pipe(gzip).pipe(writeableStream3);