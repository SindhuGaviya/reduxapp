const randomNumberInitialState={
    random:'',
    numbers:[]
}

const randomNumberReducer=(state=randomNumberInitialState,action)=>{
    switch(action.type){
        case 'GENERATE_NUMBER':{
            return{
                random:action.payload,
                numbers:state.numbers.concat(action.payload)
            }
        }
        default:{
            return {...state}
        }
    }
}

export default randomNumberReducer