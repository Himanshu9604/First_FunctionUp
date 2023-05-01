import React, { useEffect, useState } from 'react'

function Timer() {
    const[sec,setSec]=useState(0)
    const[min,setMin]=useState(0)
    const[hour,setHour]=useState(0)

    let Time;

    useEffect(()=>{
          Time=setInterval(()=>{
            setSec(sec+1)
            if(sec===59){
                setMin(min+1)
                setSec(0)
            }else if(min===59){
                setHour(hour+1)
                setMin(0)
                // setSec(0)
            }
          },1000)
          return ()=>{clearInterval(Time)}
    })
  return (
    <div>
    {hour<10?'0'+hour:hour} :{ min<10?'0'+min:min } :{ sec<10?'0'+sec:sec}
    </div>
  )
}

export default Timer
