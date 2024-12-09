
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadspinner } from './Blog/Actions/Blog.actions';
import { getblog } from './Blog/Reducer/Blog.selector';
import { loadblog, loadblogfail } from './Blog/Actions/Blog.actions';
import { BlogModel } from './Blog/Model/blog.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading: boolean = false;
  filteredBlogs: BlogModel[] = [];
  blogList$: Observable<BlogModel[]>;

  constructor(private store: Store) {
    this.blogList$ = this.store.select(getblog);
  }

  // ngOnInit(): void {
  //   this.loadBlogs();
  // }

  // loadBlogs() {
  //   this.isLoading = true;  
  //   this.store.dispatch(loadblog());  

  //   this.blogList$.subscribe({
  //     next: (blogs) => {
  //       if (blogs && blogs.length > 0) {
  //         this.filteredBlogs = [...blogs];  
  //         this.isLoading = false; 
  //       }
  //     },
  //     error: () => {
  //       this.isLoading = false;  
  //       this.store.dispatch(loadblogfail({ Errortext: 'Failed to load blogs' }));
  //      }
  //   });
  // } 



  ngOnInit(): void {
    this.loadBlogs();
  }
  
  loadBlogs() {
    this.isLoading = true;
    this.store.dispatch(loadblog());
  
    this.blogList$.subscribe({
      next: (blogs) => {
        if (blogs && blogs.length > 0) {
          this.filteredBlogs = [...blogs];
          this.isLoading = false;
        }
      },
      error: () => {
        this.isLoading = false;
        this.store.dispatch(loadblogfail({ Errortext: 'Failed to load blogs' }));
      }
    });
  }
  

}
