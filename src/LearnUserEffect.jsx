import { useState,useEffect } from "react"

export default function Counter() {
  let [count, setCount] = useState(0);

  let countChange = () =>{
    setCount((currCount) => currCount+1)
  }

  useEffect(function printSome(){
    console.log("i m user Effect")
  })
  return (
    <div>
      <h6></h6>
      <button onClick={countChange}>click to Increase count:  {count}</button>
    </div>
  )
}