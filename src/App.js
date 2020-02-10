import React from 'react';
import Counter from './components/count'
import Random from './components/random'
import RandomNumber from './components/randomNumber'
import UserTable from './components/users'
import UserRemoveName from './components/userRemoveName'
import Tasks from './components/tasks'
import { connect } from 'react-redux';


function App(props) {
  return (
    <div>
    <h1>Redux App</h1>
    <Counter/>
      <h1>count value-{props.count}</h1>
   
     <hr/> 
     <Random/>
    <hr/>
    <RandomNumber/>
    <hr/>
    <UserTable/>
    <hr/>
    <UserRemoveName/>
    <hr/> 
    <Tasks/> 
     
    </div>
  );
}

const mapStateToProps=(state)=>{
  return{
    count:state.count,
    random:state.random
  }
}

// const wrappedComponent=connect(mapStateToProps)(App)
// export default wrappedComponent
export default connect(mapStateToProps)(App)
