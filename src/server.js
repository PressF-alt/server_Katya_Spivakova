import express from "express";
const app = express();
const port = 1232;
app.use(express.static('src/pages'));
app.listen(port, ()=>{console.log('server start')});