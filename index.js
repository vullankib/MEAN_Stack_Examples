import express from "express";

const app = express(0);
const PORT = 3000;

app.get('/',(req,res)=>
res.send(`Node and Express server is running on port ${PORT}`)
);
