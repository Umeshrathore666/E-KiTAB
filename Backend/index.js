import express from'express';
import bookrouter from './route/book.route.js';
import mongoose from 'mongoose';
import cors from 'cors';
const app=express();
const PORT=process.env.PORT||5300;
const uri='mongodb://localhost:27017/';

app.use(cors());
//connect to mongodb
try {
    mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    });
    console.log('connect to mongodb')
} catch (error) {
  console.log("Error",error);
}

// difining routes
app.use('/book',bookrouter);
app.listen(PORT,()=>{
console.log(`connect the server${PORT}`)
})


