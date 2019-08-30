import express from 'express';
import routes from './src/routes/egRoutes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// Send Objects or Data through HTTP Post to the database


const app = express();
const PORT = 3000;
const url = MONGOLAB_URI;

// // Mongoose Connection
// if ( mongoose.connect(url) === false )
// {
// useNewUrlParser: true
// mongoose.connect(dbConn, { promiseLibrary: global.Promise }) === true
// }

module.exports.connect = async dsn => mongoose.connection(dsn, {useNewUrlParser:true});


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