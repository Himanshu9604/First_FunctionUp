import React, { useEffect, useState } from 'react'

function First() {
    const[count,setCount]=useState(0)
     const[sum,setSum]=useState(0)
    function handleCount(){
        setCount(count+1)
    }
    function handleSum(){
        setSum(sum+count)
    }
    // useEffect(()=>{
    //       handleCount()
    //       handleSum()
    //     console.log('i am called');
    // },[sum])

  return (
    <div>
        <h1>{count}</h1>
     <button onClick={handleCount}>Counter</button>
     <h1>{sum}</h1>
     <button onClick={handleSum}>Sum</button>
    </div>
  )
}

export default First