import React from 'react';
import TaskItem from './TaskItem';

function TaskManager (){
    return(
        <div className='h-screen w-screen bg-blue-600 flex justify-center items-center'>
            <div className='max-w-xl bg-white rounded-xl px-5 py-10'>
                <form className='space-x-5 flex w-[30rem] mb-10'>
                    <input type="text" 
                    className='border-2 border-blue-400 p-2 rounded-md outline-none w-10/12'/>
                    <button
                    type="submit"
                    className='bg-blue-600 text-white text-lg py-2 px-5 rounded-xl'
                    >
                        Add
                    </button>
                </form>
                <div className='space-y-2'>
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                 </div>
            </div>
        </div>

    );
}
export default TaskManager;