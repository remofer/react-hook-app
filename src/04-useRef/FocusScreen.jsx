import { useRef } from "react";

export const FocusScreen = () => {

    const ref = useRef()

    const onClick = ()=>{
        document.querySelector('input').focus();
    }
  return (
    <>
    <h1>Focus Screen</h1>
    <hr />

    <input 
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"/>
    
    <button 
        className="btn btn-primary mt-2"
        onClick={ onClick}      
        >
        Set focus
    </button>
    </>
    
   )
}
