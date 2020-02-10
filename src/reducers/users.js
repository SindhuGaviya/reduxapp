const usersInitialState=[
    {id:1,name:'arjun',email:'arjun@gmail.com'},
    {id:2,name:'raki',email:'raki@gmail.com'},
    {id:3,name:'deepa',email:'deepa@gmail.com'},
    {id:4,name:'hari',email:'hari@gamil.com'}
]

const usesrsReducer=(state=usersInitialState,action)=>{
    switch(action.type){
        case 'REMOVE_BY_NAME':{
            return state.filter(user=>user.name!== action.payload)
        }
       
        default:{
            return state
        }
    }
}

export default usesrsReducer