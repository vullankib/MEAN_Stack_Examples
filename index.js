import express from 'express';
import routes from './src/routes/egRoutes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
require('dotenv').config();

var app = express();
var port = process.env.PORT || '3000';
app.set('port', port);

// bodyparser setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true }).
  catch(error => handleError(error));

  mongoose.connection.on('error', err => {
    logError(err);
  });
  console.log("Connected");

routes(app);
// // serving static files
app.use(express.static('public'));

app.listen(port, () =>
    console.log(`your server is running on port ${port}`)
);