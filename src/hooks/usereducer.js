import React from 'react'
import "./style.css"
// const reduce = (state,action)=>{
//     if(action.type==="increment "){
//         state+1
//     }
//     if(action.type==="decrement "){
//         state>0?sate+1:state=0;
        
//     }
   

// }
const usereducer  = (props)=>  {
    const [state,dispatch]= usereducer(0)
        console.log(state);
    return (
        <>
        <div className='container'>
                <p>{props.mynum}</p>
                <button className="incr"  onClick={()=> dispatch({type:"increment"})}>
                       INCR      
                </button>
                <button className='incr' onClick={()=> dispatch({type:"decrement"})}>
                       DECR
                </button>
        </div>
        </>
    )
}

export default usereducer
