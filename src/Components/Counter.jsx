import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
  const [range,setrange] = useState("")
    // hook - useDispatch()
    const dispatch = useDispatch()
    //useSelector - to access state in store
    const count = useSelector((state)=>state.counter.value)
  return (
    <div className='d-flex justify-content-center align-items-center w-100 mt-5' style={{height:'100vh'}}>
        <div style={{width:'400px',height:'400px'}} className='shadow border rounded border-dark p-5'>
            <h3 className='text-center text-primary'>Couter Application</h3>
            <h1 className='text-center mt-4'style={{fontSize:'100px'}}>{count}</h1>
            <div className='mt-5 d-flex justify-content-evenly'>
                <button className='btn btn-success' onClick={()=>dispatch(increment(Number(range)))}>Increment</button>
                <button className='btn btn-danger' onClick={()=>dispatch(reset())}>Reset</button>
                <button className='btn btn-warning' onClick={()=>dispatch(decrement(Number(range)))}>Decrement</button>
            </div>
            <input type="text" className='form-control mt-3' placeholder='range' onChange={(e)=>setrange(e.target.value)}/>

        </div>
      
    </div>
  )
}

export default Counter
