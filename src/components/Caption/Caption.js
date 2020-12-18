import React from "react"
import classes from "./Caption.module.css"

const Caption = (props) => {
    return(
        <h1 className={classes.caption}>{props.text}</h1>
    )

}

export default Caption