const express = require('express')
const path = require('path')
const app = express();
app.use('/public',express.static(path.join(__dirname, 'public')));
const taskRoute = require('./routers/taskRoutes')
app.use('/api/v1/tasks/',taskRoute)

const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})