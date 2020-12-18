import React from "react"
import classes from "./TodoForm.module.css"
import TodoBlock from "../TodoBlock/TodoBlock"
import Button from "../Button/Button"


const TodoForm=(props)=>{

    const handleSection = () => {
        switch(props.option){
            case "all":
                return(
                    props.allTodo.filter((selected)=> selected).map(selectedx=><TodoBlock 
                    key={selectedx.id} 
                    id={selectedx.id} 
                    text={selectedx.text} 
                    completed={selectedx.completed} 
                    handleButtonDelete={props.handleButtonDelete} 
                    handleButtonCompleted={props.handleButtonCompleted}
                          />)
                )           
            case "completed":
                return(
                    props.allTodo.filter((selected)=> selected.completed===true).map(selectedx=><TodoBlock 
                        key={selectedx.id} 
                        id={selectedx.id} 
                        text={selectedx.text} 
                        completed={selectedx.completed} 
                        handleButtonDelete={props.handleButtonDelete} 
                        handleButtonCompleted={props.handleButtonCompleted} />)
                )
            case "uncompleted":
                return(
                    props.allTodo.filter((selected)=> selected.completed === false).map(selectedx=><TodoBlock 
                        key={selectedx.id} 
                        id={selectedx.id} 
                        text={selectedx.text} 
                        completed={selectedx.completed} 
                        handleButtonDelete={props.handleButtonDelete} 
                        handleButtonCompleted={props.handleButtonCompleted} />)
                )
            default:
                return(
                props.data.todo.map((list)=> 
                <TodoBlock 
                data={props.data}
                key={list.id} 
                id={list.id} 
                text={list.text} 
                completed={list.completed} 
                handleButtonDelete={props.handleButtonDelete} 
                handleButtonCompleted={props.handleButtonCompleted} />)
                )
        }
    }
    return(
        <div className={classes.todoForm}>
            <form>
                <div className={classes.textInput}>
                    <input 
                    type="text" 
                    className={classes.todoText} 
                    value={props.data.task} 
                    name="task" 
                    onChange={(event)=>props.handleChange(event)}
                    placeholder="Iveskite uzduoti"
                    />
                    <Button  style={classes.insert} handleButtonClick={props.handleButtonClick}><i className="fas fa-arrow-down"></i></Button>
                </div>
                <div className={classes.selection}>
                    <select name="option" value={props.option} onChange={(event)=>props.handleChange(event)}>
                        <option value="">Filtruoti</option>
                        <option value="all">Visi</option>
                        <option value="completed">Pabaigti</option>
                        <option value="uncompleted">Nebaigti</option>
                    </select>
                </div>
            </form>
            {handleSection()}                
        </div>
    )
}


export default TodoForm