import React from 'react'
import {connect} from 'react-redux'
import {increment} from '../actions/count'
import {decrement} from '../actions/count'


function Counter(props){
    console.log(props)
    return(
       <div>
           <h1>{props.count}</h1>
           <button onClick={()=>{props.dispatch(increment())}}>up</button>
           <button onClick={()=>{props.dispatch(decrement())}}>down</button>
          
       </div>
       
    )
}

const mapStateToProps=(state)=>{
    return {
        count : state.count
       
    }
}

// const wrappedComponent=connect(mapStateToProps)(Counter)
// export default wrappedComponent

export default connect(mapStateToProps)(Counter)
