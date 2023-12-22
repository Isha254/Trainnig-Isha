import React, {useEffect, useRef} from 'react'

function FocusInput() {

    const inputRef = useRef(null)

    useEffect(() => {
        // focus the input element 
        inputRef.current.focus()
    }, [])

    return (  
        <div>
          <center>
             <input ref={inputRef} />  
          </center> 
        </div>
    )
}


export default FocusInput;