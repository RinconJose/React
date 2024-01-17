import { LoadingQuote, Quote } from '../03-example/components';
import { useCounter, useFetch } from '../hooks';

export const Layout = () => {

    const { counter, increment} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BrakingBad Quotes</h1>
            <hr />

            {
                isLoading
                    ? (
                        <LoadingQuote />
                    )
                    : (
                        <Quote author={author} quote={quote}/>
                    )
            }

            <button 
                className="btn btn-primary mt-2"
                disabled={isLoading} 
                onClick={() => increment()}>
                Next qote
            </button>
        </>
    )
}
