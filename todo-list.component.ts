import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  install="";
  value=0;
  lists=[];
  constructor() {
    this.install="How to create app in angular(shown by using *ngFor)" 
      this.lists=["ng new app-name","cd app-name","ng serve","ng generate component component-name"]
      this.value=this.lists.length;
    
  }

  ngOnInit(): void {
  }

}
