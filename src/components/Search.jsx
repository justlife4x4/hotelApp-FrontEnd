import React, { useEffect, useRef, forwardRef, useImperativeHandle } from "react";

// Start:: Component
// props parameters
// currentPage
// onChange()

// useImperativeHandle
// setFocus
const Search = forwardRef(( props, ref ) => {
    const inputRef = useRef(null);

    useEffect(() => {
        setFocus();
    }, [props.currentPage]);

      
    // Start:: handle change
    const handleSearchChange = (e) => {
        const {value} = e.target;
        props.onChange(value);
    };
    // End:: handle change


    // Start:: set focus to search box
    const setFocus = () => {
        inputRef.current && inputRef.current.focus();
    };
    // End:: set focus to search box


    // Start:: forward reff set focus function
    useImperativeHandle(ref, () => {
        return {
            setFocus
        }
    }, []);
    // End:: forward reff set focus function


    // Start:: Html
    return (
        <form 
            className="d-flex col-7" 
            role="search">

            {/* Input element text */}
            <input 
                type="search" 
                className="form-control mr-1"
                placeholder="search" 
                autoComplete="off"
                autoFocus
                ref = { inputRef }
                maxLength = { 100 }
                onKeyUp = { handleSearchChange } />
        </form>
    )
    // End:: Html
})
// End:: Component


export default Search;