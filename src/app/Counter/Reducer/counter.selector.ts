import { createFeatureSelector, createSelector } from "@ngrx/store";
import { state } from "@angular/animations";
import { counterModel } from "../Model/counter.model";


const getcounterstate = createFeatureSelector<counterModel>('counter')

export const getcounter = createSelector(getcounterstate, (state)=>{
    return state.counter
})

export const getchannelname= createSelector(getcounterstate, (state)=>{
    return state.channelname
})