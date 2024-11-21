const JSONServer=require('json-server')  //import json server
const MpServer=JSONServer.create() //create mpserver
const router = JSONServer.router('db.json')//brings db.json file to mpserver
const middleware = JSONServer.defaults() //convert js date to json
const PORT = 3003 || process.env.PORT
 MpServer.use(middleware)//1
 MpServer.use(router)//2
 MpServer.listen(PORT,()=>{
    console.log(`Media Player server Started Running at PORT:${PORT} & Waiting for the Client Request`)
 })


