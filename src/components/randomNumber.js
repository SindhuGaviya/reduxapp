import React from 'react'
import { connect } from 'react-redux'
import {generateNumber} from '../actions/randomNumber'

function RandomNumber(props){
    const handleClick=()=>{
        const random=Math.round(Math.random()*100)
        props.dispatch(generateNumber(random))
    }
    return(
        <div>
            <h1>generate random-{props.randomNumber.random}</h1>
            <button onClick={handleClick}>generate</button>
            <ul>
                {props.randomNumber.numbers.map((n,i)=>{
                    return <li key={i}>{n}</li>
                })}
            </ul>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        randomNumber:state.randomNumber
    }
}

export default connect(mapStateToProps)(RandomNumber)