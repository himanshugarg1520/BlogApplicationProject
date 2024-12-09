import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterModel } from '../../Model/counter.model';
import { changechannelname, decrement,increment, reset } from '../../Actions/counter.action';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css']
})
export class CounterbuttonComponent {

  constructor(private store: Store<{counter:counterModel}>){

  }
  onIncrement(){
    this.store.dispatch(increment());
  }

  onDecrement(){
    this.store.dispatch(decrement());
  }

  onReset(){
    this.store.dispatch(reset());
  }

  onRename(){
    this.store.dispatch(changechannelname({channel:'Welcome to CodeWithProgrammer'}))
  }

}
