import express from 'express';
import {createTodo,updateTodo} from './types.js';
import todo from './db.js';
const app = express();

app.use(express.json());

app.post("/todo", async (req,res)=>{
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    //put it in mongoDb
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })

    res.json({
        msg: "Todo Created"
    })
    
})

app.get("/todos",async (req,res)=>{
    const todos = await todo.find({})
    res.json({
        todos
    })
})

app.put("/completed",async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayload);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })
    
})

app.listen(3000);