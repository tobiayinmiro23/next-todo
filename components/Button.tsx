import React from 'react'
import { Ibutton } from '@/types'

const Button = ({ style, handleButton, text, id }: Ibutton) => {
    return (
        <div>
            {
                id ?
                    <button className={style} onClick={() => handleButton(id)}  >{text}</button>
                    :
                    <button className={style} onClick={() => handleButton()}  >{text}</button>

            }
        </div>
    )
}

export default Button