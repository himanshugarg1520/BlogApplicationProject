import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
// import { AppstateModel } from 'src/app/shared/store/Global/AppState.Model';
import { counterModel } from '../../Model/counter.model';
import { getcounter } from '../../Reducer/counter.selector';
// import { AppstateModel } from '../../Model/appstate.model';



@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent implements OnInit{
 
  // constructor(private store: Store<{counter:counterModel}>){
  // }
  constructor(private store: Store<counterModel>){
  }


  counterDisplay!:number
  channelname='';
  counterSubscription!: Subscription
  counter$!: Observable<counterModel>

  ngOnInit(): void {

    this.counterSubscription = this.store.select(getcounter).subscribe(data=>{
     this.counterDisplay = data;
      // this.channelname = data;
      console.log("Counter Display");
    });

    // this.counter$ = this.store.select('counter')
  }


  ngOnDestroy(): void {
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe();
     }
  }
  
}
