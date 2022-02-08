import React from 'react';
import "./style.css"
import Recude from "./usereducer"

const useState = () => {
      const [mynum,setMynum]= React.useState(0)
      React.useEffect(() => {
        mynum>0?document.title = `React App(${mynum})`:document.title = `React App`
      },)
    return (
      <Recude mynum={mynum} setMynum={setMynum}/>
    )
}

export default useState
