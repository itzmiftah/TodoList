"use client"

import { useState } from 'react'
import './globals.css'

export default function Home() {

  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([]);

   
    const submitHandler = (e) => {
        
      e.preventDefault();
  
      setmainTask([...mainTask, { task, desc }]);
      setdesc("");
      settask("");
    }
  
   


  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  }

  let renderTask = <h2> No Task and description Available </h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <>
        <navbar/>
        
          <div key={i} className='flex justify-between'>
            <div className='flex justify-between mb-5 w-2/3'>
              <h5 className='font-2xl font-semibold'>
                {t.task}
              </h5>
              <h5 className=' font-semibold'>
                {t.desc}
              </h5>
            </div>
            <button
              onClick={() => {
                deleteHandler(i)
              }}
              className='bg-red-400 text-white rounded px-4 py-2 mb-3 '>
              Delete
            </button>
          </div>
        </>
      );

    })

  }
  return (
    <>
      

      <form onSubmit={submitHandler}>
        <input type='text'
          className='mt-20 border-zinc-800 border-2 m-5 px-4 py-2 rounded '
          placeholder='enter your task'
          value={task}
          onChange={(e) => {
            settask(e.target.value);
          }}
        />

        <input type='text'
          className='border-zinc-800 border-2 m-5 px-4 py-2 rounded '
          placeholder='enter your description'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}

        />
        <button className='bg-teal-500 text-white  px-3 py-2  font-bold rounded mx-2'>
          Add Task
        </button>
      </form>

      <div className='mt-5 flex justify-between w-2/3'>
        <h1 className='font-semibold mx-5'>your task</h1>
        <h1 className='font-semibold'> your description</h1>
      </div>

      <hr />
      <div className='bg-slate-200 p-8 mb-20'>
        {renderTask}
      </div>

    </>
  )
}
