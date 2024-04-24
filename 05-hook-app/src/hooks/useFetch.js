import { useEffect, useState } from "react";

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data:null,
        isLoading: true,
        hasError: null,
        error: null,
    })

    useEffect(() => {
        getFetch();
    }, [url])

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: false,
            hasError: false,
            error: null,
        })
    }
  
    const getFetch = async () => {

        setLoadingState();

        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/1');

        if(!resp.ok) {
            setState({
                data:null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText,
                }
            })
            return;
        }
        const data = await resp.json();
        setState({
            data:data,
            isLoading:false,
            hasError:false,
            error: null,
        })

        // setState({
        //     ...state,
        //     isLoading: true,
        // })

        // const resp =  await fetch(url);
        // const data = await resp.json();
        
        // setState({
        //     data,
        //     isLoading: false,
        //     hasError: null,
        // })
    }
    
  
  
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}
