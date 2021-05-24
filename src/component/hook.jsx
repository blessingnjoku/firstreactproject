import React from 'react'

function HookPractice(){
  const[name,setName]= useState('Blessing')
  const[count, setCount]=useState(0)

  let changeNmae=() =>{
    setCount(count + 1)

  }
  useEffect(() =>{
    //this is carrying out both componentDidMount and ComponentDidupdate
    //alert('hi')
    document.tittle =`update ${count}times`
    return()=>{

    }
  })
  return(
    <div>
    <h1>{count}</h1>
    <button onclick={changeNmae}>change</button>

    </div>
  )
}

export default HookPractice;
