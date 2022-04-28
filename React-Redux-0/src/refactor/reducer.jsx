import { ADD_COUNT, ADD_TODO, DELETE_TODO } from "./action";

export const reducer = (store ,action) =>{



    switch(action.type){
        case ADD_COUNT: return {...store, counter:store.counter + action.payload};
        case ADD_TODO:return {...store , todo:[...store.todo,action.payload]};
        case DELETE_TODO:return {...store, todo:store.todo.filter((todo,i)=>i!=action.payload)}

        default:return store
    }

}