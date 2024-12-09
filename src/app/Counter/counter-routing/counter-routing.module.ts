import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterdisplayComponent } from 'src/app/Counter/Components/counterdisplay/counterdisplay.component';

const routes: Routes = [

  // { path: 'counter', component: CounterdisplayComponent }, 
  // { path: '', redirectTo: '/counter', pathMatch: 'full' }, 
  { path: 'counter', component: CounterdisplayComponent }, // Counter route
 
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})


export class CounterRoutingModule { }
