import {useState} from "react";
function Button(){
 const [count,setCount] = useState(0)
     const handleInc =()=> {
        //  setCount((prevState)=>prevState+2)
        setCount(count+2)

     }
     const handleDec=()=> {
         setCount(count-1)

        
     }
     const handleDouble=()=>{
         setCount(count*2)
     }
    return (
        <>
        <h1 className={count%2==0 ? "even" : "odd"}>{count}</h1>
        {/* <button onClick={()=> handleInc(2)}>inc</button> */}
        <button onClick={handleDec}>Dec</button>
        <button onClick={handleInc}>Inc</button>
        <button onClick={handleDouble}>Double</button>
        </>
    )
}
export default Button