import React,{useState,useEffect} from 'react'
import "./style.css"
const getlocalstoragedata = ()=>{
    const list = localStorage.getItem("My notes")
    if(list){
        return JSON.parse(list)
    }else{
        return []
    }
}
const Todo = () => {
    const [inputval,setInputval]=useState("")
    const [item,setItem]=useState(getlocalstoragedata())
    const [editindex,setEditindex]=useState()
    const [togglebtn,setTogglebtn]=useState(true);
    const additem = ()=>{
        if(!inputval){
            alert('please write some notes')
            // throw new Error("please fill the box")
        }else if(inputval && !togglebtn){
           setItem(
               item.map((curelem)=>{
                   if(curelem.id === editindex){
                       
                       return {...curelem,name:inputval}
                   }
                   return curelem 
                   
               })
           )
           setEditindex(null);
        setInputval("")
        setTogglebtn(true);
        }
        else{
            const getidwithname ={
                id:new Date().getTime().toString(),
                name:inputval
            }
        setItem([...item,getidwithname]);
        console.log(item);
        setInputval("")
        }
    }
    //delete 1 items
    const deleteitem = (id)=>{
         const updateitem =item.filter((cur)=>{
             return cur.id !== id
         })
         setItem(updateitem)
    }
    //delete all items 
    const removeall=()=>{
        setItem([])
    }
    //localstorage setdata
     useEffect(() => {
       localStorage.setItem("My notes",JSON.stringify(item))
    }, [item])
    //edit items
    const edititem = (index)=>{
        const findlist = item.find((curelem)=>{
            return curelem.id === index;
        })
        setEditindex(index);
        setInputval(findlist.name)
        setTogglebtn(false);

    }
    return (
        <div className='container' key={item.id}>
            <h1 className='logo'>📝</h1>
            <textarea name="" id="" cols="40" rows="2" placeholder='✍Write a Note' className='Add-note' value={inputval} onChange={(event)=>setInputval(event.target.value)}></textarea> <div className="add"> {togglebtn?<span onClick={additem}>➕</span>:<span onClick={additem}>✍</span>}</div>
        {
            item.map((curelem)=>{
                return (
                     <div className="note"><span>{curelem.name}</span><span className='edit' onClick={()=> edititem(curelem.id)}> ✍</span> <span className='del' onClick={()=> deleteitem(curelem.id)}>✅</span></div>
                )
            })
        }
           
            <p className='remove-Note' onClick={()=> removeall()}>Remove All Note</p>
        </div>
    )
}

export default Todo
