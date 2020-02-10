import React from 'react'
import {connect} from 'react-redux'

function UserTable(props){
    return(
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                   {props.users.map(user=>{
                       return (
                           <tr key={user.id}>
                               <td>{user.id}</td>
                               <td>{user.name}</td>
                               <td>{user.email}</td>
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

export default connect(mapStateToProps)(UserTable)