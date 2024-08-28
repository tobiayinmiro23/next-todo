import React from 'react'
import { Icard } from '@/types'

import { EditModal} from '.'


const Card = ({ allTodos, setallTodos, getTodo }: Icard) => {

    const deleteTodo = (id?: string) => {
        fetch('https://next-todo-weld.vercel.app/api/Todo', {
            headers: { 'Content-type': 'application/json' },
            method: 'delete',
            cache: "no-store",
            body: JSON.stringify({
                todo: id
            })
        }).then(res => res.json())
            .then(res => {
                if (res.status) {
                    const data = allTodos?.filter((item) => item._id !== id)
                    setallTodos(data)
                } else alert('unable to delete todo, an error occured')
            })
            .catch(err => console.log(err))
    }
    return (
         <div className='mt-[3rem] max-w-[950px]'>
            {
                allTodos?.map(data => {
                    return <div key={data._id} className='flex items-start justify-around  mb-[2rem] pl-[0.3rem] '>
                        <h3 className=' text-center text-[1.25rem] w-[75%] '>{data.todo}</h3>
                        <div className='flex items-center mx-[1rem] max-[421px]:mx-[0.3rem] max-[421px]:px-[0.3rem]'>
                            <div onClick={() => deleteTodo(data._id)} className="w-[1.15rem] cursor-pointer h-[2rem] mr-[0.8rem]"><img src="/delete.png" alt="" /></div>
                            <EditModal todo={data.todo} id={data._id} getTodo={getTodo} />
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Card
