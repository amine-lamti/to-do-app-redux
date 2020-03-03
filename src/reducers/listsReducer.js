import { ADDTODO,DELETETODO, COMPLETETODO, EDITTODO } from "../actions/types";


const initialState ={
        todos:[]
}

const listsReducer = (state = initialState , action) => {

switch (action.type) {
    case ADDTODO:
        return { todos:state.todos.concat(action.payload)}
    case DELETETODO:
        return { todos:state.todos.filter((el => el.id !== action.payload))}
    case COMPLETETODO:
        return { todos:state.todos.map((el =>el.id===action.payload ? {...el , class:!el.class}:el))}
    case EDITTODO:
        return { todos:state.todos.map((el =>el.id===action.payload.id ? action.payload : el)) }

        default:
        return state;
}  
}

export default listsReducer ;