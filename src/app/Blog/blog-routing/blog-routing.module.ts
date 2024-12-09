import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditblogComponent } from '../Components/editblog/editblog.component';
import { BlogComponent } from '../Components/blog/blog.component';

const routes: Routes = [

  // { path: 'blog', component: BlogComponent }, 
  // { path: '', redirectTo: '/counter', pathMatch: 'full' }, 
  // { path: 'blog/edit/:id', component: EditblogComponent }

  { path: 'blog', component: BlogComponent }, 
  { path: 'blog/edit/:id', component: EditblogComponent }, 

];

@NgModule({
  // imports: [RouterModule.forRoot(routes), ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class BlogRoutingModule { }
