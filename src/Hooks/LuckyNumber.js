import React from 'react'
import { useState } from 'react'

function Second() {
  const[luckyNumber,setLuckyNumber] =useState([])
  const[count,setCount] = useState(0)
  const[message,setMessage] = useState('')

  let luck=20
  function handleLuckyNumber(){
    if(luckyNumber<20){
      alert('Please select big number')
      setCount(count+1)
      setLuckyNumber(luckyNumber)
    }else if(luckyNumber>20){
      alert('Please select small number')
      setCount(count+1)
      setLuckyNumber(luckyNumber)
  }else{
    alert('Congratulations')
    setMessage(!message)
  }
}
  return (
    <div>
      
        <input type='number' value={luckyNumber} onChange={(e)=>setLuckyNumber(e.target.value)} />
   <button onClick={handleLuckyNumber}>Lucky Number</button>
   {message && <h1>{count}</h1>}
    </div>
  )
}

export default Second