import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterRoutingModule } from '../app/Counter/counter-routing/counter-routing.module';
import { BlogRoutingModule } from '../app/Blog/blog-routing/blog-routing.module';



const routes: Routes = [
  { path: '', redirectTo: '/counter', pathMatch: 'full' },
  {
    path: 'counter',
    loadChildren: () => import('../app/Counter/counter-routing/counter-routing.module').then(m => m.CounterRoutingModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('../app/Blog/blog-routing/blog-routing.module').then(m => m.BlogRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [CounterRoutingModule, BlogRoutingModule]
})
export class AppRoutingModule {}




// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { CounterRoutingModule } from '../app/Counter/counter-routing/counter-routing.module';
// import { CounterModule } from '../app/Counter/counter/counter.module';
// import { BlogModule } from '../app/Blog/blog/blog.module';


// const routes: Routes = [
//   // { path: '', redirectTo: '/counter', pathMatch: 'full' },
//   { path: '', redirectTo: '/blog', pathMatch: 'full' }, 

//   {
//     path: 'counter',
//     loadChildren: () => import('../app/Counter/counter/counter.module').then(m=>m.CounterModule)
//   },
//   {
//     path: 'blog',
//     loadChildren: () => import('../app/Blog/blog/blog.module').then(m=>m.BlogModule)
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}





