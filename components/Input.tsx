import React from 'react'
import { input } from '@/types'
import { Button } from '.'

const Input = ({ settodoText, todoText, addTodo }: input) => {

    return (
        <div className='my-[2rem] w-[100%] m-[auto] flex items-center justify-center ' >
            <input value={todoText} onChange={(e) => settodoText(e.target.value)} className='bg-[#f5f2f2] w-[70%] border-[#e8e5e4] border-[1px] py-[0.7rem] px-[1rem] rounded-full outline-none max-[452px]:w-[65%] max-[452px]:m-[auto]  max-[452px]:mx-[0.3rem] max-[308px]:w-[61%]' type="text" placeholder='add a todo to keep track of your tasks' />
            <Button style='bg-[orange] m-[1rem] rounded-full py-[0.65rem] px-[1rem] shadow-md text-[#ffffff]  max-[452px]:mx-[0.3rem]  max-[386px]:px-[0.6rem]' handleButton={addTodo} text='Add Todo' />
        </div>

    )
}

export default Input
