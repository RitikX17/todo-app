import zod from 'zod';

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    _id: zod.string(),
})

export {
    createTodo,
    updateTodo
}