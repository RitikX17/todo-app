import { useState } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';
function App() {
  const [todos,setTodos] = useState([]);
  return (
    <>
      <CreateTodo></CreateTodo>
      <Todos todos={
        [
          {
            "title": "Learn DSA",
            "description": "from 8-12 p.m.",
            "completed": false,
          },
          {
            title: "Learn System Design",
            description: "from 2-4 p.m.",
            completed: true
          }
        ]
      }></Todos>
    </>
  )
}

export default App
