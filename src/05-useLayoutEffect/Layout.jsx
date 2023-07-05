import { useFetch } from "../hooks/useFetch"
import { useCounter } from "../hooks/useCounter";


export const Layout = () => {

    const { counter, increment} =  useCounter(1);
    // const {data: data, hasError, isLoading} = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`);
    const {data, hasError, isLoading} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);

    // const{quote, author} =!!data && data[data.length - 1];
    const { quote, author } = (!isLoading && data.length>0) && data[0];



    console.log({data, isLoading, hasError});
 
    return (
    <>
    <h1>Breaking Bad Quotes</h1>
    <hr />
    {
        isLoading
            ?(
                <div className="alert alert-info text-center">
                    Loading...
                </div>
            )
            :(
                <blockquote 
                    className="blockquote text-right"
                    style={{display: 'flex'}}>
                        <p className="mb-1">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                </blockquote>
            )
    }
   
    <button
    className="btn btn-primary"
    onClick={ ()=>increment() }>
        Next quote
    </button>

    </>
     
    )
}
