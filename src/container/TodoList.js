import React, {Component} from "react"
import TodoForm from "../components/TodoForm/TodoForm"
import { v4 as uuidv4 } from 'uuid';
import classes from "./TodoList.module.css"
class TodoList extends Component{

    state= {
        task : "",
        todo : [],
        option:  "",
        allTodo: [],
        fall : false
    }

    handleChange = (event)=>{
        const { name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleButtonClick=(event)=>{
        event.preventDefault()
        const newTask={
            id : uuidv4(),
            text : this.state.task,
            completed : false
        }
        this.setState(prevState=>{
            return{
                todo : [...prevState.todo, newTask],
                allTodo : [...prevState.todo, newTask],
                task : ""
            }
            
        })
    }

    handleButtonDelete = (id)=>{
        const newList = this.state.todo.filter(task=> task.id !== id)
        this.setState({
            todo : newList,
            allTodo : newList,
            fall : !this.setState.fall
        })
    }

handleButtonCompleted = (id)=>{
    const taskCompleted = this.state.todo.map(task=>{
        if(id === task.id)
        {
            task.completed = task.completed ? !task.completed : !task.completed
        }
        return task
    })
    this.setState({todo : taskCompleted})
}

   
    render(){
        return(
            <div className={classes.todoList}>
                <TodoForm data={this.state} allTodo={this.state.allTodo} option={this.state.option} handleChange={this.handleChange} handleButtonClick={this.handleButtonClick} handleButtonDelete={this.handleButtonDelete} handleButtonCompleted={this.handleButtonCompleted} />
            </div>
        )
    }
}

export default TodoList