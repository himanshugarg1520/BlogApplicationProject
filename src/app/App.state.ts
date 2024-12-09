import { routerReducer } from "@ngrx/router-store";
import { counterReducer } from "./Counter/Reducer/counter.reducer";
// import { AppReducer } from "./Counter/Reducer/app.reducer";
import { blogReducer } from "./Blog/Reducer/Blog.reducer";

export const Appstate= {
    counter: counterReducer,
    blog: blogReducer,
    // app: AppReducer,
    router: routerReducer,
}