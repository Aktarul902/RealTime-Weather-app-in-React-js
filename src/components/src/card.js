import React from 'react'
import "./style.css"
// import images from "./images"
// import App from '../../App'

const card = (props) => {

//    console.log(props.menuData);
return(
<>
{props.menuData.map((curelem)=>{
    console.log(curelem.id);
    return (
          <>
            <main >
            <div className="card">
               <div className="id">{curelem.id}</div>
               <div className="food-name">{curelem.Name}</div>
               <div className="catagory">{curelem.catagory}</div>
               <div className=""><img src={curelem.pic}alt=""  className='pic-food'/></div>
               <div className="details">{curelem.description}</div>
            </div>
         </main>
         </>
    
        )  
})}
</>
)
   
 
   
         
}

export default card
