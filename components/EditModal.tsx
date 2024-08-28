import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { IeditTodo } from '@/types';
import { Button } from '.';

function EditModal({ todo, id, getTodo }: IeditTodo) {
    const [show, setShow] = useState(false);
    const [todoText, settodoText] = useState<string>(todo)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const cancelModal = () => {
        settodoText(todo)
        setShow(false)
    }
    const updateTodo = () => {
        fetch('https://next-todo-weld.vercel.app/api/Todo', {
            headers: { 'Content-type': 'application/json' },
            method: 'put',
            cache: "no-store",
            body: JSON.stringify({
                id,
                todo: todoText
            })
        }).then(res => res.json())
            .then(res => {
                if (res.status) getTodo()
                else alert('unable to delete todo, an error occured')
            })
            .catch(err => console.log(err))
        setShow(false)
    }

    return (
        <>
            <div onClick={handleShow} className="w-[1.78rem] cursor-pointer h-[2rem] ml-[1rem] mt-[-0.5rem] max-[421px]:ml-[0.3rem]"><img src="/edit (1).png" alt="" /></div>
            <Modal
                show={show}
                onHide={cancelModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input value={todoText} onChange={(e) => settodoText(e.target.value)} className='bg-[#ffffff] w-[100%] border-[#c8c6c5] border-[1px] py-[0.7rem] px-[1rem] rounded-lg outline-none' type="text" placeholder='add a todo to keep track of your tasks' />
                </Modal.Body>
                <Modal.Footer>
                    <Button style='bg-[#404040] text-[0.8rem] rounded-[5px] py-[0.55rem] px-[0.45rem] m-[0.4rem] text-[#ffffff]' handleButton={handleClose} text='Close Modal' />
                    <Button style='bg-[#404040] text-[0.8rem] rounded-[5px] py-[0.55rem] px-[0.45rem] m-[0.4rem] text-[#ffffff]' handleButton={updateTodo} text='Edit Todo' />
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditModal;
