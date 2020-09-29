import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css'],
  template:'<h1>This is header file</h1>'
})
export class TodoHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
