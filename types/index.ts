import { Dispatch, SetStateAction } from "react";

export interface input {
    todoText: string,
    settodoText: Dispatch<SetStateAction<string>>,
    addTodo: () => void
}

export interface Icard {
    allTodos: IallTodos[] | [],
    todoText: string,
    // setallTodos: (data: IallTodos[] | [] ) => void,
    setallTodos: Dispatch<SetStateAction<IallTodos[] | []>>,
    getTodo: () => void
}

export interface IallTodos {
    todo: string,
    __v: number
    _id: string,
}

export interface IeditTodo {
    todo: string,
    id: string,
    getTodo: () => void
}

export interface Ibutton {
    style: string
    handleButton: (id?: string) => void,
    text: string,
    id?: string
}
