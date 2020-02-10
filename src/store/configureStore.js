import {createStore,combineReducers} from 'redux'
import countReducer from '../reducers/count'
import randomReducer from '../reducers/random'
import randomNumberReducer from '../reducers/randomNumber'
import usersReducer from '../reducers/users'
import tasksReducer from '../reducers/tasks'

const configureStore=()=>{
    const store=createStore(combineReducers({
        count:countReducer,
        random:randomReducer,
        randomNumber:randomNumberReducer,
        users:usersReducer,
        tasks:tasksReducer
        
    }))
    return store
}

export default configureStore