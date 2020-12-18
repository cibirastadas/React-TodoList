import React from "react"
import classes from "./TodoBlock.module.css"
import Button from "../Button/Button"
const TodoBlock = (props)=>{
    return(
        
        <div className={`${classes.listBlock}`}>
            <ul className={props.completed ? classes.taskCompleted : null}>
                <li>{props.text}</li>
            </ul>
            <div className={classes.buttons}>
                <Button style={classes.complete} handleButtonClick={props.handleButtonCompleted} parameter={props.id}><i className="fas fa-check"></i></Button>
                <Button style={classes.delete} handleButtonClick={props.handleButtonDelete} parameter={props.id}><i className="far fa-trash-alt"></i></Button>
            </div>            
        </div>
    )
}

export default TodoBlock