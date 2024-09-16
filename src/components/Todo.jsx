import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";

const Todo = () => {
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

    const handleAddTask = (e) => {
        e.preventDefault();

        const data = [
            ...tasks, {
                id: Math.floor(Math.random() * Date.now()),
                name: newTask,
                completed: false
            }   
        ]

        setTasks(data);

        localStorage.setItem('tasks', JSON.stringify(data));

        setNewTask('')
    }

    const handleCompleteTask = (id) => {
        const updateTask = tasks.map((task) => {
            if(id === task.id){
                return {
                    ...task,
                    completed: !task.completed
                }
            }

            return task;
        });

        localStorage.setItem('tasks', JSON.stringify(updateTask));

        setTasks(updateTask)
        
    }

    const handleRemoveTask = (id) => {
        const removeTask = tasks.filter(task => task.id !== id)

        localStorage.setItem('tasks', JSON.stringify(removeTask));

        setTasks(removeTask);
    }

    return (
        <Card>
            <Card.Title>Todo</Card.Title>
            <Card.Body>
                <form>
                    <div className="flex items-center gap-2">
                        <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                        <Button onClick={handleAddTask} className={'bg-black'}>Add task</Button>
                    </div>
                </form>
                {tasks.length > 0 ? <ol className={'space-y-2 mt-4'}>
                    {tasks.map((task) => (
                        <li key={task.id} className="flex items-center justify-between">
                            <span>{task.name} {task.completed ? '✅' : '❎'}</span>
                            
                            <div className={'flex items-center gap-2'}>
                                <button onClick={() => handleCompleteTask(task.id)} className={'px-2 py-1 border text-xs'}>Mark as {task.completed ? 'incomplete' : 'complete'}</button>
                                <button onClick={() => handleRemoveTask(task.id)} className={'px-2 py-1 border text-xs'}>remove</button>
                            </div>
                        </li>
                    ))}
                </ol> : null}
            </Card.Body>
            <Card.Footer>
                You have {tasks.length} tasks.
            </Card.Footer>
        </Card>
    )
}

export default Todo;