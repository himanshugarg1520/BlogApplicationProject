import { createAction, props } from "@ngrx/store";
import { BlogModel } from "../Model/blog.model";

export const Load_Blog_Success = '[blog page] load blog success';
export const Load_Blog_Fail = '[blog page] load blog fail';
export const Load_Blog = '[blog page] load blog';
export const Add_Blog_Success = '[blog page] add blog success';
export const Add_Blog = '[blog page] add blog';
export const Update_Blog = '[blog page] update blog';
export const Update_Blog_Success = '[blog page] update blog success';
export const Delete_Blog = '[blog page] delete blog';
export const Delete_Blog_Success = '[blog page] delete blog success';

export const loadblogsuccess = createAction(Load_Blog_Success, props<{bloglist: BlogModel[]}>());
export const loadblogfail = createAction(Load_Blog_Fail, props<{Errortext: string}>());

export const loadblog = createAction(Load_Blog);

export const addblog = createAction(Add_Blog, props<{bloginput: BlogModel}>());
export const addblogsuccess = createAction(Add_Blog_Success, props<{bloginput: BlogModel}>());

export const updateblog = createAction(Update_Blog, props<{bloginput: BlogModel}>());
export const updateblogsuccess = createAction(Update_Blog_Success, props<{bloginput: BlogModel}>());

export const deleteblog = createAction(Delete_Blog, props<{id:number}>());
export const deleteblogsuccess = createAction(Delete_Blog_Success, props<{id: number}>());
export const deletesaveblog = createAction(Delete_Blog, props<{id: number}>());


export const likeBlog = createAction(
  '[Blog] Like Blog',
  props<{ blogId: number }>()
);

export const reactToBlog = createAction(
  '[Blog] React To Blog',
  props<{ blogId: number; reaction: string }>()
);

export const incrementViewCount = createAction(
  '[Blog] Increment View Count',
  props<{ blogId: number }>()
);

export const markAsFavorite = createAction(
    '[Blog] Mark As Favorite',
    props<{ blogId: number }>()
  );


  
export const removeFromFavorites = createAction(
    '[Blog] Remove From Favorites',
    props<{ blogId: number }>()
);

export const loadBlogsLoading = createAction('[Blog] Load Blogs Loading');
export const addBlogLoading = createAction('[Blog] Add Blog Loading');

export const sortBlogs = createAction(
  '[Blog] Sort Blogs',
  props<{ sortOption: string }>()
);

export const toggleFavoriteBlogs = createAction(
  '[Blog] Toggle Favorite Blogs',
  props<{ showFavorites: boolean }>()
);

export const searchBlogs = createAction(
  '[Blog] Search Blogs',
  props<{ searchText: string }>()
);


export const SHOW_ALERT = '[App Event] show alert';
export const ShowAlert = createAction(SHOW_ALERT, props<{message: string, actionresult: string}>());

export const EMPTY_ACTION = '[App Event] empty';
export const Empty_Action = createAction(EMPTY_ACTION)

export const Load_Spinner = '[blog page] load spinner'
export const loadspinner = createAction(Load_Spinner, props<{isloaded: boolean}>());
 