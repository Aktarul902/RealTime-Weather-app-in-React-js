import React,{useEffect,useState} from 'react'
import "./style.css"

const Time = (props) => {
   const [itime,setItime] = useState() 
 
    const time = new Date();
  let date = time.toLocaleDateString()
    // console.log(time);
    // const hour = time.getHours();
    // const minite = time.getMinutes();
    //     const second = time.getSeconds();
    const updatetime =()=>{
        let time = new Date().toLocaleTimeString();
        setItime(time)
    }
    setInterval(()=>{
        updatetime()
    },1000)


    return (
        <>
        <div className="date"><span className='span'>{date}</span></div>
        <div className="time">{itime}</div>
    
        </>
    )
}

export default Time
