import React from 'react'
import {addTask} from '../actions/tasks'
import {connect} from 'react-redux'

class TaskForm extends React.Component{
    constructor(){
        super()
        this.state={
            title:''
        }
    }

    handleClick=(e)=>{
        const title=e.target.value
        this.setState({title})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id:Number(new Date()),
            title:this.state.title,
            completed:false
        }
        this.props.dispatch(addTask(formData))
    }

    render(){
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>title</label>
                <input type='text' value={this.state.title} onChange={this.handleClick}/>
                <input type='submit'/>
            </form>
        </div>
        )}
}

export default connect()(TaskForm)