import React from 'react'
import "./style.css"
import Card from "./card"
import Api from "./Api"

 const Resturants = () => {
     const [menuData,setMenuData]= React.useState(Api)
    //  console.log(menuData);
    const updateli = (catagory)=>{
        const filteritem = Api.filter((curelem)=>{
            return curelem.catagory === catagory
        })
        setMenuData(filteritem)
    }
    return (
    
<>
<div className='text-center'>
<h1>Raj Resturant</h1>
</div>
<header>
    <nav>
        <ul>
            <li onClick={()=>{updateli("Morning")}}>Breakfast</li>
            <li onClick={()=>{updateli("Lunch")}}>Lunch</li>
            <li onClick={()=>{updateli("Evening")}}>Evening</li>
            <li onClick={()=>{updateli("Dinner")}}>Dinner</li>
            <li onClick={()=>{setMenuData(Api)}}>All</li>
        </ul>
    </nav>
</header>
<Card menuData={menuData} />

</>    
        
    
    )
}
export default Resturants
