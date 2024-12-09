import { createReducer, StateObservable, on } from "@ngrx/store";
import { state } from "@angular/animations";
import { initialstate} from './counter.state'
import { State } from "@ngrx/store";
import { changechannelname,customincrement,decrement,increment, reset } from "../Actions/counter.action";
import { loadspinner } from "../Actions/counter.action";

const _counterReducer = createReducer(initialstate,
    
    on(increment, (state)=>{
        return {
            ...state,
            counter: state.counter+1
        }
    }),

    on(decrement, (state)=>{
        return {
            ...state,
            counter: state.counter-1
        }
    }),

    on(reset, (state)=>{
        return {
            ...state,
            counter: 0
        }
    }),

    on(customincrement, (state,action)=>{
        return{
            ...state,
            counter:action.action == 'add' ? state.counter + action.value : state.counter - action.value
        }
    }),

    on(changechannelname, (state,action)=>{
        return {
            ...state,
            channelname: action.channel
        }
    }),

    
    on(loadspinner, (state,action)=>{
        return {
            ...state,
            isloaded: action.isloaded
        }
    }),
    

)


export function counterReducer(state:any, action:any){
    return _counterReducer(state,action);
}



// export function AppReducer(state:any,action:any){

//     return _appReducer(state,action);
// }