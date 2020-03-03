import { ADDTODO,DELETETODO,COMPLETETODO,EDITTODO} from "./types"


export const addLists =(newTodo)=>{
    return {
        type : ADDTODO, 
        payload : newTodo
    }
}

export const deleteLists =(id)=>{
    return {
        type : DELETETODO, 
        payload : id
    }
}

export const completeLists =(x)=>{
    return {
        type : COMPLETETODO,
        payload : x
    }
}

export const editLists =(name,id) =>{
    return {
    type : EDITTODO,
    payload : {name,id}
    }
}


