import express, { application } from "express";
const userRouter = express.Router();

userRouter.use((req, res, next) =>{
    next();
})

userRouter.get('/hello', (req,res)=>{
    res.send('Hello body!')
})

userRouter.use((err, req, res, next) =>{
    throw new Error('lol');
})
export {userRouter};