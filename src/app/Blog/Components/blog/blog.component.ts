
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
// import { AppstateModel } from 'src/app/shared/store/Global/AppState.Model';
import { Blogs } from '../../Model/blog.model';
import { getbloginfo } from '../../Reducer/Blog.selector';
import { BlogModel } from '../../Model/blog.model';
import { MatDialog } from '@angular/material/dialog';
import { AddblogComponent } from '../addblog/addblog.component';
import { deleteblog, incrementViewCount, likeBlog, loadblog, markAsFavorite, reactToBlog } from '../../Actions/Blog.actions';
import { LoadingspinnerComponent } from '../loadingspinner/loadingspinner.component';
import { loadspinner } from 'src/app/Counter/Actions/counter.action';
import { Router } from '@angular/router';
import { filter, take, takeUntil } from 'rxjs';
import { Subject } from 'rxjs';
import { ViewblogComponent } from '../viewblog/viewblog.component';
import * as BlogActions from '../../Actions/Blog.actions'



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {

  bloglist: BlogModel[] = [];
  filteredBlogs: BlogModel[] = [];
  availableReaction = ['like','love','surprised'];
  showFavorites: boolean=false;
  sortoption: string = 'mostRecent'
 
  private unsubscribe$ = new Subject<void>();

  constructor(
    private store: Store<Blogs>, 
    private dialog: MatDialog, 
    private router: Router
  ) {}

  // @Output() toggleFavoritesEvent = new EventEmitter<{ isFavorite: boolean, blogId: number }>();


  // ngOnInit(): void {
  //   this.store.dispatch(loadspinner({ isloaded: true }));

  //   this.store.dispatch(loadblog());
    
  //   this.store.select(getbloginfo)
  //     .pipe(takeUntil(this.unsubscribe$))
  //     .subscribe(item => {
  //       if (item) {
  //         this.bloglist = item.bloglist || [];
  //         // this.filteredBlogs = this.bloglist;
  //         this.updateblogfilters(); 
  //         this.filteredBlogs = this.bloglist;
  //       }
  //     });

  //   setTimeout(() => {
  //     this.store.dispatch(loadspinner({ isloaded: false }));
  //   }, 1000);
  // }


  ngOnInit(): void {
    this.store.dispatch(loadspinner({isloaded: true}));
    this.store.dispatch(loadblog());
    this.store.select(getbloginfo)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(item=>{
        if(item){
          this.bloglist = item.bloglist || [];
          this.updateblogfilters();
          this.filteredBlogs=this.bloglist;
        }
      });
      setTimeout(() => {
        this.store.dispatch(loadspinner({isloaded: false}))
      }, 1000);
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  // toggleFavorites(): void{
  //   this.showFavorites = !this.showFavorites;
  //   this.updateblogfilters()
  // }

  updateblogfilters():void{
    this.filteredBlogs = this.showFavorites
      ? this.bloglist.filter(blog=>blog.isFavorite)
      : this.bloglist
   }

  updateblogfilters1(): void{
    let filtered = this.showFavorites
      ? this.bloglist.filter(blog=>blog.isFavorite)
      : [...this.bloglist]

    switch(this.sortoption){
      case 'mostViewed':{
        filtered.sort((a,b)=> b?.views - a?.views);
        break;
      }
      case 'mostLiked':{
        filtered.sort((a,b)=> b?.likes - a?.likes);
        break;
      }
      case 'mostRecent':
        filtered.sort((a,b)=>(new Date(b?.date ||0)).getTime() - (new Date(a?.date ||0)).getTime());
        break;
      default:
        filtered.sort((a,b)=>(new Date(b?.date ||0)).getTime() - (new Date(a?.date ||0)).getTime());
        break;
     }
    this.filteredBlogs=[...filtered]
  }

  // onSortchange(sortoption: string){
  //     this.sortoption=sortoption;
  //     this.updateblogfilters1();
  //   }

  addBlog(): void {
    this.openpopup(0, 'Add Blog');
  }

  onSortChangeEvent(sortOption: string): void {
    this.sortoption = sortOption;
    this.updateblogfilters1(); 
  }
  
  onAddBlogEvent(): void {
    this.addBlog();
  }
  
  onToggleFavoritesEvent(showFavorites: boolean): void {
    this.showFavorites = !showFavorites;
    this.updateblogfilters(); 
  }
  
  openpopup(id: any, title: any, isedit = false): void {
    const dialogData = { id, title, isedit: isedit };

    this.dialog.open(AddblogComponent, {
      width: '25%',
      data: dialogData
    });
  }

  Editblog(id: any): void {
    this.openpopup(id, 'Edit Blog', true);
  }

  Removeblog(id: any): void {
    if (confirm('Are you sure you want to remove?')) {
      this.store.dispatch(loadspinner({ isloaded: true }));

      setTimeout(() => {
        this.store.dispatch(deleteblog({ id }));
        this.store.dispatch(loadspinner({ isloaded: false }));
      }, 1000);
    }
  }

  onSearchEvent(searchText: string): void {
    this.filteredBlogs = this.bloglist.filter(blog =>
      blog.title.toLowerCase().includes(searchText.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  // onSearchEvent(event: Event): void {
  //   const target = event.target as HTMLInputElement;
  //   const searchText = target.value.toLowerCase();

  //   this.updateblogfilters();
  //   // if (this.bloglist) {
  //     this.filteredBlogs = this.bloglist.filter(blog =>
  //       blog.title.toLowerCase().includes(searchText) || 
  //       blog.description.toLowerCase().includes(searchText) 
  //     );
  //   // }
  // }
  

  likeBlog(id: number): void {
    this.store.dispatch(likeBlog({ blogId: id }));
  }

  // reactToBlog(id: number, reaction: string): void {
  //   this.store.dispatch(reactToBlog({ blogId: id, reaction }));
  // }

  reactToBlog(blogId: number, reaction: string): void {
    const blog = this.filteredBlogs.find(b => b.id === blogId);
    if (blog) {
  
      blog.reactions[reaction] = (blog.reactions[reaction] || 0) + 1;
      blog.userReaction = reaction;
    }
  }

  // viewBlog(id: number): void {
  //   this.store.dispatch(incrementViewCount({ blogId: id }));
  //   this.router.navigate([`/blog/${id}`]);
  // }

  

  viewBlog(blogId: number): void {
    const blog = this.filteredBlogs.find(b => b.id === blogId);
    
    if (blog) {
      this.store.dispatch(incrementViewCount({ blogId }));

      this.dialog.open(ViewblogComponent, {
        width: '400px',
        data: {
          title: blog.title,
          description: blog.description,
          views: blog.views + 1, 
          likes: blog.likes,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
          userReaction: blog.userReaction
        }
      });
    }
  }

  markAsFavorite(blogId: number) {
    this.store.dispatch(BlogActions.markAsFavorite({ blogId }));
    this.updateblogfilters();
  }
  
  removeFromFavorites(blogId: number) {
    this.store.dispatch(BlogActions.removeFromFavorites({ blogId }));
    this.updateblogfilters();
  }

}




