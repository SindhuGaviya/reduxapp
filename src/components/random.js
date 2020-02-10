import React from 'react'
import { connect } from 'react-redux'
import {randomnumber} from '../actions/count'

function Random(props){
    return(
        <div>
            <h1>generate random-{props.random}</h1>
            <button onClick={()=>{const rand=Math.round(Math.random()*100)
            props.dispatch(randomnumber(rand))}}>generate</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        random:state.random
    }
}

export default connect(mapStateToProps)(Random)