import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
  template:'<h1>hello</h1>'
})
export class TodoFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
