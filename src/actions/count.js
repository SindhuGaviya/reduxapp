export const increment=()=>{
    return {type:'INCREMENT'}
}

export const decrement=()=>{
    return {type:'DECREMENT'}
}

export  const randomnumber=(rn)=>{
    return {type:'RANDOM', payload:rn}
}


//  const rn=Math.round(Math.random()*100)

