import express from 'express';
import routes from './src/routes/egRoutes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// Send Objects or Data through HTTP Post to the database


const app = express();
const PORT = 3000;

// Mongoose Connection
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/egDB',{
    userMongoClient:true
});

// bodyparser setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


routes(app);

app.get('/',(req,res)=>
    res.send(`Node and Express server is running on port ${PORT}`)
);

app.listen(PORT,()=>
    console.log(`your server is running on ${PORT}`)
);