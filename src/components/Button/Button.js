import React from "react"
const Button = (props)=>{
    return(
        <>
            {
                props.parameter ? 
                <button   className={props.style} onClick={()=> props.handleButtonClick(props.parameter)}>{props.children}</button> :
                <button   className={props.style} onClick={(event)=> props.handleButtonClick(event)}>{props.children}</button>
            }
        </>
    )
}

export default Button