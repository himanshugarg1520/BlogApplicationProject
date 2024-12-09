import { createReducer } from "@ngrx/store";
import { blogstate } from "./Blog.state";
// import { addblog, addblogsuccess, deleteblog, deleteblogsuccess, incrementViewCount, likeBlog, loadblog, loadblogfail, loadblogsuccess, reactToBlog, updateblog, updateblogsuccess } from "../../Actions/Blog.actions";
import { addblog, addblogsuccess, deleteblog, deleteblogsuccess, incrementViewCount, likeBlog, loadblog, loadblogfail, loadblogsuccess, reactToBlog, updateblog, updateblogsuccess } from "../Actions/Blog.actions";
import { state } from "@angular/animations";
import { on } from "@ngrx/store";
import { BlogModel } from "../Model/blog.model";
import { act } from "@ngrx/effects";
import { Action } from "rxjs/internal/scheduler/Action";
import { map } from "rxjs";
import * as BlogActions from '../Actions/Blog.actions'
import { loadspinner } from "../Actions/Blog.actions";

const _blogReducer = createReducer(blogstate,
    
    on(loadblog,(state) => {
        return {
            ...state,
            isloaded: false
         }
    }), 

    on(loadblogsuccess, (state,action) => {
        
        return {
            ...state,
             bloglist: action.bloglist,
             isloaded: false
        }
    }),
    
    on(loadblogfail, (state,action)=>{
        console.log(action.Errortext)
        return {
            ...state,
            bloglist: [],
            Errormessage: action.Errortext,
            isloaded: false
        }
    }),

    // on(addblog, (state,action) => {
    //     const _blog = {...action.bloginput};
    //     _blog.id = state.bloglist.length+1;
    //     return {
    //         ...state,
    //          bloglist: {...state.bloglist,_blog}
    //     }
    // }),
    
    on(addblogsuccess, (state,action) => {
        const _blog = {...action.bloginput};
        // _blog.id = state.bloglist.length+1;
        return {
            ...state,
             bloglist: {...state.bloglist,_blog},
             isloaded: false
        }
    }),

    on(updateblogsuccess, (state,action) => {
        const _blog = {...action.bloginput};
        const updatedblog = state.bloglist.map(blog=>{
            return _blog.id===blog.id?_blog:blog;
        })
        return {
            ...state,
             bloglist:updatedblog,
            //  isloaded: false
        }
    }),

    on(deleteblogsuccess, (state,action)=>{
        const _blog = {...action}
        const updatedblog = state.bloglist.filter((data: BlogModel)=>{
            return data.id !== action.id
        })
        return {
            ...state,
            bloglist: updatedblog,
            // isloaded: false

        }
    }),

    // on(loadspinner, (state,action)=>{
    //     return {
    //         ...state,
    //         isloaded: action.isloaded
    //     }
    // })


    on(likeBlog, (state, { blogId }) => {
        const updatedBloglist = state.bloglist.map(blog =>
            blog.id === blogId ? { ...blog, likes: blog.likes + 1 } : blog
        );
        return {
            ...state,
            bloglist: updatedBloglist
        };
    }),

    on(reactToBlog, (state, {blogId})=>{
        const savereactionblog = state.bloglist.map(blog=>
            blog.id===blogId ? {...blog, reactions: blog.reactions }: blog
        );
        return {
             ...state,
             bloglist: savereactionblog
        }
    }),

    
    on(reactToBlog, (state, { blogId, reaction }) => {
    const updatedBloglist = state.bloglist.map(blog =>
        blog.id === blogId
        ? {
            ...blog,
            reactions: {
                ...blog.reactions,
                [reaction]: (blog.reactions[reaction] || 0) + 1
            }
        }
        : blog
    );
        return {
            ...state,
            bloglist: updatedBloglist
        };
    }),
    

    on(incrementViewCount, (state, { blogId }) => {
        const updatedBlogList = state.bloglist.map(blog =>
            blog.id === blogId ? { ...blog, views: blog.views + 1 } : blog
        );
        return { ...state, bloglist: updatedBlogList };
    }),
    
        
    on(BlogActions.markAsFavorite, (state, { blogId }) => ({
        ...state,
        bloglist: state.bloglist.map(blog =>
            blog.id === blogId ? { ...blog, isFavorite: true } : blog
        )
    })),

    on(BlogActions.removeFromFavorites, (state, { blogId }) => ({
        ...state,
        bloglist: state.bloglist.map(blog =>
            blog.id === blogId ? { ...blog, isFavorite: false } : blog
        )
    })),

    
    on(loadspinner, (state,action)=>{
        return {
            ...state,
            isloaded: action.isloaded
        }
    })

      
);


export function blogReducer(state:any,action:any){

    return _blogReducer(state,action);
}


