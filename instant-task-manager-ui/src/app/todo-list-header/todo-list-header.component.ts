import { Component, Output, EventEmitter } from '@angular/core';
import {Sort} from '@angular/material';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent {

  newTodo: Todo = new Todo();
  todos: Todo[];
  sortedTasks: Array<Object> = [];

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

}
