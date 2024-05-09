import express from 'express';
import {createTodo,updateTodo} from './types';
const app = express();

app.use(express.json());

app.post("todo",(req,res)=>{
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    //put it in mongoFb
})

app.get("/todos",(req,res)=>{
    
})

app.put("/completed",(req,res)=>{
    const updatePayload = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayload);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
})