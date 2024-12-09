import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterbuttonComponent } from './Counter/Components/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './Counter/Components/counterdisplay/counterdisplay.component';
import { CustomcounterComponent } from './Counter/Components/customcounter/customcounter.component';
import { AddblogComponent } from './Blog/Components/addblog/addblog.component';
import { BlogComponent } from './Blog/Components/blog/blog.component';
import { EditblogComponent } from './Blog/Components/editblog/editblog.component';
import { HeaderComponent } from './Blog/Components/header/header.component';
import { LoadingspinnerComponent } from './Blog/Components/loadingspinner/loadingspinner.component';
import { ViewblogComponent } from './Blog/Components/viewblog/viewblog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule  } from '@angular/material/button'; '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatMenuTrigger} from '@angular/material/menu'
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'
// import { MatDialogContent }  from '@angular/material/dialog'
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './Blog/Reducer/CustomSerializer';
import {MatDialogModule} from '@angular/material/dialog'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { Appstate } from './App.state';
import { CounterRoutingModule } from './Counter/counter-routing/counter-routing.module';
import { BlogRoutingModule } from './Blog/blog-routing/blog-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { BlogEffects } from './Blog/Effects/Blog.Effects';
import { CounterheaderComponent } from './Counter/Components/counterheader/counterheader.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Import MatSnackBarModule
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [
    AppComponent,
    CounterbuttonComponent,
    CounterdisplayComponent,
    CustomcounterComponent,
    AddblogComponent,
    BlogComponent,
    EditblogComponent,
    HeaderComponent,
    LoadingspinnerComponent,
    ViewblogComponent,
    CounterheaderComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,    
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    EffectsModule.forRoot([BlogEffects]),
    MatProgressSpinnerModule,
    StoreModule.forRoot(Appstate),
    StoreRouterConnectingModule.forRoot(
      {serializer: CustomSerializer}
    ),
    MatDialogModule,
    FormsModule, 
    ReactiveFormsModule,
    CounterRoutingModule,
    BlogRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }











// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';  // Root Module Only
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { CounterModule } from './Counter/counter/counter.module';  // Feature Module Example
// import { BlogModule } from './Blog/blog/blog.module';  // Feature Module Example

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule, 
//     AppRoutingModule,
//     CounterModule,    
//     BlogModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
