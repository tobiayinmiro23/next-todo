"use client"
import { useState, useEffect } from "react"
import { Input, Card } from "@/components"
import { IallTodos } from "@/types"
const page = () => {

  const [todoText, settodoText] = useState<string>('')
  const [allTodos, setallTodos] = useState<IallTodos[] | []>([])
  const [loading, setloading] = useState<Boolean>(true)
  useEffect(() => {
    getTodo()
  }, [])
  const addTodo = () => {
    if (todoText !== '') {
      // fetch('https://next-todo-weld.vercel.app/api/Todo', {
      fetch('https://next-todo1.netlify.app/api/Todo', {
        headers: { 'Content-type': 'application/json' },
        method: 'post',
        cache: "no-store",
        body: JSON.stringify({
          todo: todoText
        })
      }).then(res => {
        res.json()
        getTodo()
        settodoText('')
      })
        .catch(err => console.log(err))
    } else alert('todo cant be empty')
  }

  const getTodo = () => {
    // fetch('https://next-todo-weld.vercel.app/api/Todo',
    fetch('https://next-todo1.netlify.app/api/Todo',
      { cache: "no-store" }
    ).then(res => res.json())
      .then(res => setallTodos(res.message))
      .then(res => setloading(false))
      .catch(err => console.log(err))
  }


  return (
    <div className="max-w-[1000px] m-[auto]">
      <Input settodoText={settodoText} todoText={todoText} addTodo={addTodo} />
      {loading && <h3 className='text-center text-[1.5rem] mt-[2.5rem] font-bold'>loading...</h3>}
      <Card allTodos={allTodos} todoText={todoText} setallTodos={setallTodos} getTodo={getTodo} />
    </div>
  )
}
export default page
