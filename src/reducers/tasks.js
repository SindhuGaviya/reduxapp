const tasksInitialState=[
    {id:1,title:'db backup',status:true},
    {id:2,title:'db design',status:false}
]

const tasksReducer=(state=tasksInitialState,action)=>{
         switch(action.type){
             case 'ADD_TASK':{
                 return state.concat(action.payload)
             }
             case 'REMOVE_TASK':{
                 return state.filter(task=>task.id!==action.payload)
             }
             case 'TOGGLE_COMPLETE':{
                 return state.map(task=>{
                     if(task.id===action.payload){
                         return {...task,status:!task.status}
                     }else{
                        return {...task}
                     }
                 })
             }
            default:{
                return [...state]
            }
        }
}

export default tasksReducer