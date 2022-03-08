import express from "express";
import { userRouter } from "./Routers/userRoute.js";

const port = 7400;
const app = express();

app.get('/', (req, res)=>{
    res.send('Hello get request!')
})

app.use('/user', userRouter);

app.post('/', (req, res)=>{
    res.send('Hello post request!')
})

app.listen(port, ()=>{
    console.log('Server started!');
})