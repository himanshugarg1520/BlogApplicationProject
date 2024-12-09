

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { AppstateModel } from 'src/app/shared/store/Global/AppState.Model';


import { BlogModel } from '../../Model/blog.model';
import { Blogs } from '../../Model/blog.model';
import { Store } from '@ngrx/store';
import { addblog, updateblog } from '../../Actions/Blog.actions';
import { getblogbyid } from '../../Reducer/Blog.selector';
import { loadspinner } from 'src/app/Counter/Actions/counter.action';
import { max } from 'rxjs';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  pagetitle = '';
  editblogid = 0;
  editdata!: BlogModel;

  blogForm = this.builder.group({
    id: [0],
    title: ['', Validators.required],
    description: ['', Validators.required],
    status: ['draft'],
  });

  constructor(
    private dialogref: MatDialogRef<AddblogComponent>,
    private builder: FormBuilder,
    private store: Store<Blogs>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.pagetitle = this.data.title;

    if (this.data.isedit) {
      this.editblogid = this.data.id;
      this.store.select(getblogbyid(this.editblogid)).subscribe(_data => {
        this.editdata = _data;
        this.blogForm.setValue({
          id: this.editdata.id,
          title: this.editdata.title,
          description: this.editdata.description,
          status: this.editdata.status || 'draft',
        });
      });
    }
  }

  closepopup(): void {
    this.dialogref.close();
  }

  saveAsDraft(): void {
    this.saveBlogs('draft');
  }

  publishBlog(): void {
    this.saveBlogs('published');
  }

  private saveBlogs(status: 'draft' | 'published'): void{
    if (this.blogForm.valid) {

      let generatedId: number;
  
      if (this.data.isedit) {

        generatedId = this.blogForm.value.id as number;
      } else {

        const blogs: BlogModel[] = this.data.blogList || []; 
        const maxId = blogs.reduce((max, blog: BlogModel) => Math.max(max, blog.id || 0), 0);
        generatedId = maxId + 1;
      }
  
      const _bloginput: BlogModel = {
        id: generatedId,
        title: this.blogForm.value.title ?? '',
        description: this.blogForm.value.description ?? '',
        likes: 0,
        reactions: {},
        views: 0,
        status: status,
        date: new Date().toISOString(),
      };
  
      this.store.dispatch(loadspinner({ isloaded: true }));
  
      setTimeout(() => {
        if (this.data.isedit) {
          this.store.dispatch(updateblog({ bloginput: _bloginput }));
        } else {
          this.store.dispatch(addblog({ bloginput: _bloginput }));
        }
        this.closepopup();
      }, 1000);
    }
  } 

}
