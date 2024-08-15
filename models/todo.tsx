import { Schema, model, models } from "mongoose";
const TodoSchema = new Schema({
    todo: {
        type: String,
    },
})

export const Todo = models?.Todos || model('Todos', TodoSchema)