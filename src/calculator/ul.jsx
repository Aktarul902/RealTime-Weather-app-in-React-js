import React,{useState} from 'react'
import "./style.css"
const Ul = () => {
    const [firstval,setFirstval]=useState()
    const [oparator,setOparator]=useState()
    const [secondval,setSecondval]=useState()
    const [showresultval,setShowresult]=useState();
    const showresult = ()=>{
        switch (oparator) {
            case "+" :
                
                parseInt(setShowresult(firstval+secondval))
                break;
                case "-":
                    setShowresult(firstval-secondval)
                    break;
                    case "*":
                        setShowresult(firstval*secondval)
                        break;
                        case"/":
                        setShowresult(firstval / secondval)
                        break;
                        default:
                            alert("please fill any condition ")
                            break;
                        }
                        setFirstval("")
                        setOparator("")
                        setSecondval("")
    }


    return (
        <div className='container'>
            <div className="calculator">
                <input type="search" value={firstval}onChange={(e)=> setFirstval(parseInt(e.target.value))} name="" id=""  className='secval'/>
                <input type="search" name="" id="" value={oparator} className='secval' onChange={(e)=>setOparator(e.target.value)}/>
                <input type="search" name="" id="" className='secval'  value={secondval} onChange={(e)=>setSecondval(parseInt(e.target.value))}/>
                <input type="search" name="" id="" className='result' value={showresultval} />
                <ul>
                    <li >1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>.</li>
                    <li>+</li>
                    <li>-</li>
                    <li>X</li>
                    <li>/</li>
                    <li onClick={showresult}> = </li>
                </ul>
            </div>
        </div>
    )
}

export default Ul
