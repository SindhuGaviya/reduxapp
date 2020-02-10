import React from 'react'
import { connect } from 'react-redux'
import TaskForm from '../components/taskForm'
import { removeTask} from '../actions/tasks'
import {toggleComplete} from '../actions/tasks'

function Tasks(props){
    const handleClick=(id)=>{
        props.dispatch(removeTask(id))
    }

    const handleCheck=(id)=>{
        props.dispatch(toggleComplete(id))
    }
    return(
        <div>
            <h1>Listing Users-{props.tasks.length}</h1>
            <table border='1'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>status</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tasks.map(task=>{
                        return (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td><input type='checkbox' checked={task.status} onChange={()=>{handleCheck(task.id)}}/></td>
                            <td><button onClick={()=>{handleClick(task.id)}}>remove</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            <br/>
            <TaskForm/>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        tasks:state.tasks
    }
}

export default connect(mapStateToProps)(Tasks)