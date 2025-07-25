import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MyAppActionTypes } from '../store/actions/myapp.action';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  constructor(private store: Store) {}

  ngOnInit() {
  }

  onButtonClick(){
    console.log('Button clicked!');
    // Dispatch an action to the store
    // This is just an example action, replace with your actual action 
    const user = { id: 1, name: 'John Doe' };
    this.store.dispatch({ type: MyAppActionTypes.ADD_USER, user });
  }
}
