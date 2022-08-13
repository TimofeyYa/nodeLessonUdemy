import express ,{ Express } from "express";
const userRouter = express.Router();

userRouter.get('/', (req,res) =>{
    res.send('Hello body!');
});

export default userRouter;