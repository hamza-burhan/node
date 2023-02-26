const express = require('express')
const app = express()
const path = require('path')


app.get('/',(req,res)=>{
    app.use(express.static('./public'))

    res.sendFile(path.resolve(__dirname,'./index.html'))
    console.log("🚀 ~ file: App.js:8 ~ app.get ~ __dirname:", __dirname)
    res.end
})


app.all('*',(req,res)=>{
    res.status(400).send('Error')
})

app.listen(2000,()=>{
    console.log('Server is Listining')
})

// server.listen(2000,()=>{console.log('Listning')})

//os node module  => os = require('os')
//os.userinfo ,type(), release(), freemem(), totalmem(),  


// path module => require('path')
//path.sep(), join , basename(), resolve()


//fs module
// readfilesync(path,utf8), writefilesync(path,data,{flag,a}means it will append data not override)
//readfile(path,utf8,(err,result)=>{})   writefile(path,data,{flag,a},(err, res)=>{}



//http module
//http.createServer((req,res)=>{res.end; req.url}).listen(5000)


//Event Loop => stack>webapi>que 


//util Module
//util.promisify(turn function into promise)


//require().promises => return all promise


//events Module
//its a class so we will create object of it 
//it has 2 functions .on('event',callback) .emit(event,arg)
//many other module depends on/Extend events class 
//Many Module has pre define on(events) 




//Streams
//to handle large amount of data
// a = createReadStream(path,{highWaterMark:size of a chunk, encoding:utf8})
//a.on('data',(result)=>{}),        a.on('err', (err)=>{})
//a.on('open', ()=>{})              
//stream.pipe(res) => write streams
//Actual Code
// const {createReadStream} = require('fs')
// const {createServer} = require('http')

// const server = createServer()

// server.on('request',(req,res)=>{
//     const text = createReadStream('./assets/file.txt','utf-8')
//     text.on('open',()=>{
//         text.on('data',(data)=>{
//             res.end(data)
//         })
//     })
//     text.on('error',(err)=> console.log(err))
// })




//Status codes in Response Head
//200=sucsess 400=error
//content-type: html/js/plain



// req res Object
//res.write() ,res.end, res.writeHead()
//req.url 



//Express
//Express is a function 
//app.get, post, all, put, delete, listen



//Request handles with express
//app.get()
//get(path,(req,res)=>{ res.send(content you want to send) })
//app.all('*', (req,res)=>{ res.status(200) set the status code }) for all other paths
//Actual code
// const express = require('express')
// const app = express()
// const path = require('path')

// app.get('/',(req,res)=>{
//     app.use(express.static('./public'))

//     res.sendFile(path.resolve(__dirname,'./index.html'))
//     console.log(" ~ file: App.js:8 ~ app.get ~ __dirname:", __dirname)
//     res.end
// })
// app.listen(2000,()=>{
//     console.log('Server is Listining')
// })




//Request that require all assets
//res.sendfile(path.resolve(__dirname,path))
//app.use(express.static(folder path)) => send all static assets to the browser that will not 
//change acording to req 