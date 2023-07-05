// import { useFetch } from "../hooks/useFetch"
// import { useCounter } from "../hooks/useCounter";


// export const MultipleCustomHooks = () => {

//     const { counter, increment} =  useCounter(1);
//     const { data, isLoading, hasError} = useFetch('https://pokeapi.co/api/v2/pokemon/1');

//     // const {data: data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon-form/${ counter }`);
//     // const {data, hasError, isLoading} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);

//     // const{quote, author} =!!data && data[data.length - 1];
//     // const { quote, author } = (!isLoading && data.length>0) && data[0];



//     // console.log({data, isLoading, hasError});
 
//     return (
//     <>
//     <h1>Breaking Bad Quotes</h1>
//     <hr />
 
//     {
//         isLoading
//             ?(
//                 <div className="alert alert-info text-center">
//                     Loading...
//                 </div>
//             )
//             :(
//                 <blockquote className="blockquote text-end">
//                     <p className="mb-1">{quote}</p>
//                     <footer className="blockquote-footer">{author}</footer>
//                 </blockquote>
//             )
//     }
   
//     <button
//     className="btn btn-primary"
//     onClick={ ()=>increment() }>
//         Next quote
//     </button>

//     </>
     
//     )
// }

//todo prueba

import React from 'react'

import { useFetch } from "../hooks/useFetch"
import { useCounter } from "../hooks/useCounter";
import { LoadingQuote } from './LoadingQuote';
import { Quote } from './Quote';



export const MultipleCustomHooks = () => {

const{counter, increment}= useCounter(1);
const {data, isLoading, hasError, image} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);
//console.log({data})
 const {status, name, origin}= !!data && data;

 
 
 // se que el incrementar va a cambiar el valor del counter  
 // y cuando esto cambie va a volverse a redibujar
 // modifico el url, por backsticks, O CONCATENANDO

// if (isLoading) {
//   return (<h1>Loading...</h1>  )
// }
 

 

  return (
   <>
   <h1>Rick and Morty</h1>
      <hr />

      {
        isLoading
        ? <LoadingQuote />
        : <Quote name= {name} status={status} origin={origin} />

      }      
  
     <button 
      disabled={isLoading}
      onClick= { ()=> increment() }
      className='btn btn-primary'>
      next status
     </button>

     {/* <button className="btn btn-primary mt-2">Borrar</button> */}
   </>
  )


}

