import React,{createRef, useEffect} from 'react';


const Color=()=>{

    const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "#5445", "rgba(124,257,278,0.5)"]
    //referencia del DOM al body
    const BackgroundC = createRef()
    const Text =createRef()
    const Parrafo =createRef()

    useEffect( ()=>{
        hanblerClick()
        // eslint-disable-next-line 
    },[])

    const hanblerClick=(e)=>{
  
         const random = Randon()
        BackgroundC.current.parentElement.parentElement.style.backgroundColor=colors[random]
        Text.current.textContent=colors[random]
        Parrafo.current.style.color=colors[random]
      // BackgroundC.current.style.backgroundColor=colors[2]
    }

    const Randon=()=>{
        return Math.floor(Math.random()*colors.length)
    }


    return(
          <main ref={BackgroundC}>
             <div className="container" >
               <h2 ref={Parrafo}>Background color: <span className="color" ref={Text}>#154256</span></h2>
               <button className="btn btn-hero"  onClick={hanblerClick}>Click Me</button>
             </div>
          </main>
    )
}

export default Color