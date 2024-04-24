const express = require('express')
const path = require('path')
const app = express();
const mongoose = require('mongoose');   
app.use(express.json())
const dotenv = require('dotenv');


app.use('/public',express.static(path.join(__dirname, 'public')));
const taskRoute = require('./routers/taskRoutes');
// Load environment variables from config file
dotenv.config({ path: './.env' });
// Connect to MongoDB
const DB = process.env.DATABASE;
mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=> console.log('conncted to DB successfully...'))
.catch(err=> console.log(err))
app.use('/api/v1/tasks/',taskRoute)

const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})