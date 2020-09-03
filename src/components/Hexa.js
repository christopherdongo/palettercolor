import React, {createRef, useEffect} from 'react';




const Hexa =()=>{

    const hex =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    //cons refer
    const BGColor = createRef()
    const Tex =createRef()
    const Par = createRef()

    useEffect( ()=>{
        handlerClickHexa();
        // eslint-disable-next-line
    }, [])

    const handlerClickHexa=()=>{
         let HexaColor ='#';
        for(let i =0; i<6; i++){
            //acumulador
             HexaColor += hex[RandonH()]
        }
        BGColor.current.parentElement.parentElement.style.backgroundColor=HexaColor;
        Tex.current.textContent=HexaColor
        Par.current.style.color=HexaColor
    }

    const RandonH=()=>{
        return Math.floor(Math.random() * hex.length)
    }

    return(
        <main ref={BGColor}>
          <div className="container">
            <h2 ref={Par}>Background Color: <span className="color" ref={Tex}>#f155f8</span></h2>
            <button className="btn btn-hero" onClick={handlerClickHexa}>Click mee</button>
          </div>
         
        </main>
    )
}

export default Hexa