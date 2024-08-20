export function Todos({todos}){
    return <>
   {
    todos.map((todo)=>{
        return <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>Mark as completed</button>
        </div>
    })
   }
    </>
}