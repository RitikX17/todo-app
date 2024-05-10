import mongoose from "mongoose";
import { boolean } from "zod";

mongoose.connect("mongodb+srv://rutikthak17:Ritik%40123@todoapp.bded8ux.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo = mongoose.model('todos', todoSchema);

export default todo;