const express = require('express')
const app = express()

const authr = require('./routes/auth.js')




app.use('/login',authr)






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



//Api
//send json data as a response
//res.json(data in the form of json)


//Route Params in Express
//app.get('/about/:id')
//id become param that we can get from user or route or URL
//we can access it from req.params to write our own logic 
//it return a string value



//query string
//user can send data from url
//route?name=''&id='1'
//we can get this data from req.query object



//Middlewear
// functions(any logic) execute between req => middleware => res
//place app.get(path,middleware,callback)
//function name(req,res,next)

//app.use([middleware])
//app.use(express.static(send the full folder  ))


//req.user = blank object



//POST
//form actions='routes method='http method' if its post request
//express post method
//app.post(path,middleware,callback)
//forms data goes to req.body
//we can get this data from req.body by express middleware express.urlencoded({extended:true})
//Now req.body has the data



//if we want to access inputs data without sumitting form
//val = input value
//axios.post(path, data)
//data will go to the req.body



//app.use(express.json())
//req.body has form data but we cant access json data posted 
//.json() middleware will parse posted json data into req.body



//posstman to test apis
//morgan middleware to get time of server



//we can give data to server by GET method
//we can take data from a server by post method in req.body
//we can post data by axios.post or javascript to post data to server



//GET => to get resource from server
//POST => to create new resource in server
//PUT => to update current resource in server
//DELETE => to delete resource from server
//route could be same for all methods
//ie app.get('/home') ,     app.post('/home')



//express.Router
//to separate routes from app.js
//then use app.use('basepath', specific router)



//controller folder
//we write our api functions in controller folder and references them in routes folder




 