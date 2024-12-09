import { routerReducer } from "@ngrx/router-store";
import { blogReducer } from "./Blog.reducer";
import { counterReducer } from "src/app/Counter/Reducer/counter.reducer";

export const Appstate= {
    counter: counterReducer,
    blog: blogReducer,
    router: routerReducer,
}