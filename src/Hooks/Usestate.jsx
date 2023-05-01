// import React, { useState } from 'react'

// function First() {
//  const[task,setTask]=useState([])
//  const[input,setInput]=useState('')
  
//  function handleAdd(){
//   const data =[...task,input]
//   setTask(data)
//   setInput('')
//   console.log(data);
//  }
// function handleDelete(index){
//   const data=task.filter((y)=>y.name!=index.name)
//   setTask(data)
//   setInput('')
//   console.log(data);
 
// }
//   return (
// <>
// <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} />
// <button onClick={handleAdd}>Add</button>
// <button onClick={(index)=>handleDelete(index)}>Delete</button>
// {task.map((el)=>{
//   return (
//     <li>{el}</li>
//   )
// })}
// </>
//   )
// }

// export default First

//////////////////////////////////////////////////////////////
// import React from 'react'
// import { useState } from 'react'

// function First() {
//   const[color,setColor]=useState([])
//   let Color=['red', 'green', 'blue','yellow', 'pink','orange','voilet','orange']

//   function handleColorChnage(){
//     const RandomColor=Math.floor(Math.random()*Color.length)
//     const ChnageColor=Color[RandomColor]
//     setColor(ChnageColor)
    
//   }

//   return (
//     <div>
//       <h1 style={{backgroundColor:color}}>{color}</h1>
// <button onClick={handleColorChnage}>Color Change</button>
//     </div>
//   )
// }
////////////////////////////////////////////////////////////////////////


// import React from 'react'
// import { useState } from 'react'

// function First() {
//   const[names,setNames]=useState([])
//   const Names =['Naina','Neha','Sham','Himanshu','Ram','Raj','Kajal','Rohit','Akash','Suraj','Sachin','Harsh']
 
//   function handleNames(){
//     const RandomNames=Math.floor(Math.random()*Names.length)
//     const ChnageNames=Names[RandomNames]
//     setNames(ChnageNames)
//   }

//   return (
//     <div>
//       <h1>{names}</h1>
//       <button onClick={handleNames}>Names</button>
//     </div>
//   )
// }

// export default First



/////////////////////////////////////////////////////////////////////////

