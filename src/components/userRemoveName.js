import React from 'react'
import {connect} from 'react-redux'
import {removeByName} from '../actions/users'

function UserRemoveName(props){
    const handleRemoveByUser=(user)=>{
        const userName=prompt('enter the name')
        if(userName===user.name){
            return props.dispatch(removeByName(userName))
        }else{
            prompt('invalid name')
        }
    }
    return(
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                   {props.users.map(user=>{
                       return (
                           <tr key={user.id}>
                               <td>{user.id}</td>
                               <td>{user.name}</td>
                               <td>{user.email}</td>
                               <td><button onClick={()=>{handleRemoveByUser(user)}}>remove</button></td>
                           </tr>
                       )
                   })}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        users:state.users
    }
}

export default connect(mapStateToProps)(UserRemoveName)