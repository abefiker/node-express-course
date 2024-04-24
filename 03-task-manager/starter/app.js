const express = require('express')
const path = require('path')
const app = express();
app.use('/public',express.static(path.join(__dirname, 'public')));
const port = 3000;

app.get('/api/v1/tasks',(req,res)=>{
    res.send(200);
})
app.post('/api/v1/tasks',(req,res)=>{
    res.send(200);
})

app.get('/api/v1/tasks/:id',(req,res)=>{
    res.send(200);
})

app.patch('/api/v1/tasks/:id',(req,res)=>{
    res.send(200);
})
app.delete('/api/v1/tasks/:id',(req,res)=>{
    res.send(200);
})



app.get('/hello',(req,res)=>{
    res.send('Task manager App')
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})