import { Component, OnInit } from '@angular/core';
//@ts-ignore
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'learn Angular',
        completed: false
      },
      {
        content: 'allow Powershell to run scripts',
        completed: true
      }
    ]
  }

  toggleDone(id: number): void {
      this.todos.map((v, i) => {
      if(i==id) v.completed = !v.completed;
    })
  }
}