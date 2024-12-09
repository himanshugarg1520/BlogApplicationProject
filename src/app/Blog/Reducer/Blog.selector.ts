import { createFeatureSelector } from "@ngrx/store";
import { BlogModel, Blogs } from "../Model/blog.model";
import { state } from "@angular/animations";
import { createSelector } from "@ngrx/store";
import { RouterstateModel } from "./CustomSerializer";
import { RouterReducerState } from "@ngrx/router-store";
import { loadspinner } from "../Actions/Blog.actions";

const getblogstate = createFeatureSelector<Blogs>('blog');

export const getblog = createSelector(getblogstate,(state)=>{
    return  state.bloglist;
})

export const getblogbyid=(blogid:number) => createSelector(getblogstate,(state)=>{
    return  state.bloglist.find((blog:BlogModel)=>blog.id===blogid) as BlogModel;
})

export const getbloginfo = createSelector(getblogstate, (state)=>{
    return state;
})

// export const getspinnerstate = createSelector(getblogstate,(state)=>{
//     return state.isloaded;
// })


const getrouterstate = createFeatureSelector<RouterReducerState<RouterstateModel>>('router');

export const getrouterinfo = createSelector(getrouterstate,(state)=>{
    return state.state.queryparams['id'];
});


const getAppstate = createFeatureSelector<Blogs>('blog');

export const getspinnerstate = createSelector(getAppstate,(state)=>{
    return state.isloaded;
})

