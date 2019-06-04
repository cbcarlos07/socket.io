const app = require('express')()
const http = require('http').createServer(app)

const io = require('socket.io')(http)

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html')
})

io.on('connection', (socket)=>{
    //console.log('new socket',socket)
    console.log('new socket',socket.id)
    socket.on('msg', (msg)=>{
        console.log(msg)
        //socket.broadcast.emit('msg', socket.id+' connected')
        socket.broadcast.emit('msg', msg)
        //socket.emit('msg', msg)
    })
    
})

http.listen(3000, ()=>{
    console.log('Ouvindo na porta 3000')
})