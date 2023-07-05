import { useLayoutEffect, useRef, useState } from "react"


export const Quote = ({status, name }) => {
  
  const pRef= useRef ();
  const [boxsize, setboxsize] = useState({  width:0, height:0 })



useLayoutEffect(() => {

const{height, width}= (pRef.current.getBoundingClientRect());
  setboxsize();

}, [name])



  return (

    <>
     <blockquote className='blockquote text-end'
    style= {{display:"flex"}}
    >
    

      
        <footer > {name} </footer>
        <hr />
        <p ref= {pRef} className='mb-4'> { status } </p>

        
      


      </blockquote>

      <code> {JSON.stringify(boxsize)} </code>
    
    </>
     )
}
