import react, { useState } from 'react';

function Test(props){
    const[count,setCount]=useState(0);
//     const handleChange=()=>{
//     setCount(count+1)
//     console.log(count)
// }
    return(
        <div>
        {/* <button onClick={handleChange}>{count}</button> */}
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        </div>
    );
}
export default Test