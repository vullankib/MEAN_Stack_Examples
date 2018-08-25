import express from 'express';
import routes from './src/routes/egRoutes.js';

const app = express();
const PORT = 3000;

routes(app);

app.get('/',(req,res)=>
    res.send(`Node and Express server is running on port ${PORT}`)
);

app.listen(PORT,()=>
    console.log(`your server is running on ${PORT}`)
);