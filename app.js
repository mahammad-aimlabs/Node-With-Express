//SIMPLE NODE JS APPLICATION

// import http from 'node:http'
// // Create a local server to receive data from
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({
//       data: 'Hello World!',
//     }));
// });
// server.listen(8000,()=>{
//     console.log('Listening on 127.0.0.1:8000');
// });

//WITH EXPRESS
const express = require('express')
const app = express()

app.listen(8000,()=>{
    console.log('Listening on 127.0.0.1:8000')
})
app.get('/',(req,res)=>{
   res.contentType = 'application/json'
   res.send({
    data: 'hello user'
   })
})
app.get('/user',(req,res)=>{
    res.contentType = 'application/json'
    res.send({
        userName: 'Potato'
    })
 })


